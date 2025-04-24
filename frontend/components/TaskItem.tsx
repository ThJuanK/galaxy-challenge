import { Task } from '@/services/taskService';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


interface Props {
    task: Task;
    handlePress: () => void;
}

export const TaskItem = ({ task, handlePress }: Props) => {
    return (
        <TouchableOpacity
            style={[styles.taskItem, task.isDone && styles.completedBackground]}
            onPress={handlePress}
        >
            <Text style={[styles.taskTitle, task.isDone && styles.completed]}>
            {task.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    taskCheckbox: {
        marginRight: 10,
    },
    taskTitle: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    completedBackground: {
        backgroundColor: '#f0f0f0',
    }
})

export default TaskItem;