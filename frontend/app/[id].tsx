import React from 'react';

interface TaskDetailScreenProps {
    route: {
        params: {
            id: string;
        };
    };
}

const TaskDetailScreen: React.FC<TaskDetailScreenProps> = ({ route }) => {
    const { id } = route.params;
    return (
        <div>
            {id}
        </div>
    );
};

export default TaskDetailScreen;