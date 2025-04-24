import ButtonGroup from '@/components/ui/ButtonGroup';
import { Input } from '@/components/ui/Input';
import { createBasicPopup } from '@/config/modal';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { useForm } from '@/hooks/useForm';
import { createTask, deleteTask, Task, updateTask } from '@/services/taskService';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import CheckBox from '@/components/ui/CheckBox';
import Button from '@/components/ui/Button';

const formValidators = {
    description: (value: string) => !value ? "La descripción es requerida" : null,
    title: (value: string) => {
        if (value.length < 3) return "El titulo debe tener al menos 3 caracteres";
        if (!value) return "El titulo es requerido";
        return null;
    },
}

const EditTaskScreen = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { id } = useLocalSearchParams();
    
    if( !id ) router.back();
    
    const tasks = queryClient.getQueryData<Task[]>(["tasks"]);
    const task = tasks?.find(t => t.id === Number(id));
    
    if (!task) {
        return (
            <View style={GlobalStyles.screenView}>
                <Text style={GlobalStyles.title}>No se encontró la tarea</Text>
            </View>
        )
    }

    const initialData = {
        description: task.description,
        title: task.title,
        isDone: task.isDone,
    }

    const { validate, errors, values, handleChange } = useForm(initialData)

    const handleSubmit = async () => {
        const isValid = validate(formValidators)
        if (isValid) {
            try {
                await updateTask(Number(id), values)
                await queryClient.refetchQueries();
                await Alert.alert("Listo", "Tarea actualizada exitosamente.")
                router.back()
            }
            catch (e: any) {
                Alert.alert("Ups...", "Algo ha salido mal al actualizar la tarea 😓.")
            }
        };
    }

    const handleCancel = () => {
        createBasicPopup({
            title: "Cancelar",
            text: "¿Estás seguro de que quieres salir de la creación?\n\nLos cambios no se guardarán 😓.",
            handleAccept: () => router.back(),
        })
    }

    const handleDelete = () => {
        createBasicPopup({
            title: "Eliminar tarea",
            text: "¿Estás seguro de que quieres eliminar la tarea?\n\nNo podrás recuperarla después.",
            handleAccept: async () => {
                deleteTask(Number(id))
                await queryClient.refetchQueries();
                await Alert.alert("Listo", "Tarea eliminada exitosamente.")
                await router.back()
            },
            handleError: () => router.replace("/")
        })
    }

    return (
        <View style={GlobalStyles.screenView}>
            <View style={GlobalStyles.flex1}>
                <Input
                    value={values.title}
                    label="Titulo"
                    handleChange={handleChange}
                    error={errors.title}
                    name='title'
                />
                <Input
                    value={values.description}
                    label="Descripción"
                    handleChange={handleChange}
                    error={errors.description}
                    name='description'
                />
                <View style={[GlobalStyles.flexRow, styles.gapDeleteButton]}>
                    <CheckBox
                        label="¿Está completada?"
                        checked={values.isDone}
                        onChange={(value) => handleChange("isDone", value)}
                    />
                    <Button
                        onPress={() => handleDelete()}
                        style={[GlobalStyles.flex1, GlobalStyles.dangerBackground]}
                    >
                        Eliminar tarea
                    </Button>
                </View>
            </View>
            <ButtonGroup
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    gapDeleteButton: {
        gap: 10,
        marginVertical: 20,
    }
})

export default EditTaskScreen;