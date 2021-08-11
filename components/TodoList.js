import React, { Fragment } from 'react'
import { FlatList } from 'react-native'
import TodoItem from './TodoItem'

const todoItems = [
    { id: 1, title: 'Задача 1', isComplete: false },
    { id: 2, title: 'Задача 2', isComplete: false },
    { id: 3, title: 'Задача 3', isComplete: false },
    { id: 4, title: 'Задача 4', isComplete: false },
    { id: 5, title: 'Задача 5', isComplete: false },
    { id: 6, title: 'Задача 6', isComplete: false },
    { id: 7, title: 'Задача 7', isComplete: false },
    { id: 8, title: 'Задача 8', isComplete: false },
    { id: 9, title: 'Задача 9', isComplete: false },

]

const TodoList = () => (
    <FlatList
        data={todoItems}
        renderItem={({ item }) => (
            <TodoItem
                title={item.title}
                isComplete={item.isComplete}
            />
        )}
        keyExtractor={item => item.id.toString()}
    />
)

export default TodoList
