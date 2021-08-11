import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import TodoList from './TodoList'
import { uuid } from 'uuidv4'


const Todo = () => {
    return (
        <>
            <TodoList />
            <TextInput
                style={styles.textInput}
                placeholder="Добавить задачу"
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: StyleSheet.hairlineWidth
    }
})

export default Todo