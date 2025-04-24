import { ButtonGroup } from "@/components/ui/ButtonGroup"
import { Input } from "@/components/ui/Input"
import { createBasicPopup } from "@/config/modal"
import { GlobalStyles } from "@/constants/GlobalStyles"
import { useForm } from "@/hooks/useForm"
import { createTask } from "@/services/taskService"
import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "expo-router"
import { Alert, TextInput, View, Text } from "react-native"

const InitialFormValues = {
    title: "",
    description: "",
    isDone: false,
}

const formValidators = {
    description: (value: string) => !value ? "La descripción es requerida" : null,
    title: (value: string) => {
        if (value.length < 3) return "El titulo debe tener al menos 3 caracteres";
        if (!value) return "El titulo es requerido";
        return null;
    },
}

const CreateTaskScreen = () => {
    const router = useRouter();
    const queryClient = useQueryClient()
    const { validate, errors, values, handleChange } = useForm(InitialFormValues)

    const handleSubmit = async() => {
        const isValid = validate(formValidators)
        if (isValid) {
            try {
                await createTask(values)
                Alert.alert("Listo", "Tarea creada exitosamente.")
                queryClient.refetchQueries()
                router.back()
            }
            catch(e: any){
                router.replace("/")
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
            </View>
            <ButtonGroup
                handleCancel={handleCancel}
                handleSubmit={handleSubmit}
            />
        </View>
    )
}

export default CreateTaskScreen;