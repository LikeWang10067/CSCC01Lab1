import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
    const [tasks, setTasks] = useState(initialValues.map((value) => ({id: uuidv4(), thing: value})))

    const removeToDo = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id) );
      };

    const addToDo = (newTitle) => {
        const newTask = { id:uuidv4(), thing: newTitle };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    return  (
        <View style={styles.todoListContainer}>
            {tasks.map((task) => (
                <View key={task.id}>
                <Text style={styles.todoItem}>
                    Task: {task.thing}  <Button title="Delete Task" onPress={() => removeToDo(task.id)} />
                </Text>
                </View>
            ))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: ['nothing']
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;