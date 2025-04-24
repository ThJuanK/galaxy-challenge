import { API_URL } from "@/config/envs";
import { GlobalStyles } from "@/constants/GlobalStyles";
import { View, Text, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/services/taskService";
import TaskItem from "@/components/TaskItem";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";

export default () => {

    const router = useRouter();

    const { data: tasks, isLoading, isError, refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: fetchTasks,
        refetchOnWindowFocus: true,
        retry: 1,
        staleTime: 30000,
    });

    if (isLoading) {
        return (
            <View style={GlobalStyles.screenView}>
                <Text style={GlobalStyles.title}>Cargando tareas...</Text>
            </View>
        );
    }

    if (isError || !tasks) {
        return (
            <View style={GlobalStyles.screenView}>
                <Text style={GlobalStyles.title}>Error al cargar las tareas, verifica la conexión al API 🤓</Text>
            </View>
        );
    }

    return (
        <View style={GlobalStyles.screenView}>
            {
                tasks.length === 0 && (
                    <View style={[GlobalStyles.screenView, GlobalStyles.centerItems]}>
                        <Text style={[GlobalStyles.title]}>No hay tareas disponibles</Text>
                        <Button 
                            onPress={() => router.push("/create")}
                        >Crea la primera aquí</Button>
                    </View>
                )
            } 

            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TaskItem
                        task={item}
                        handlePress={() => router.push(`/${item.id}/edit`)}
                    />
                )}
            />
        </View>
    );
}