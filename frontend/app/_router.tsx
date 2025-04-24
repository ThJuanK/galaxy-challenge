import { Stack } from "expo-router"

export const StackNavigator = () => (
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Tareas App' }} />
        <Stack.Screen name="[id]" options={{ title: 'Detalle de la tarea' }} />
        <Stack.Screen name="[id]/edit" options={{ title: 'Editar Tarea' }} />
        <Stack.Screen name="create" options={{ title: 'Crear Tarea' }} />
    </Stack>
)

export default StackNavigator;
