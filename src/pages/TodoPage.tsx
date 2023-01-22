import React, { useState, useRef} from 'react';
import { Form } from '../components/Form';
import { ListItem } from '../components/ListItem';

export interface Itodo {
    title: string
    id: number
    completed: boolean
}


export const TodoPage: React.FunctionComponent = () => {
    const [todo, setTodo] = useState<Itodo[]>([])
   
    const addElement = (title: string) => {
        const newItem = {
            title: title,
            id: Date.now(),
            completed: false
        }

        setTodo(prev => [newItem, ...prev])
    }

    const removeTodo= (id:number) => {
        setTodo(prev => prev.filter(item => item.id !== id))
    }

    const toggleTodo = (id:number) => {
        setTodo(prev => prev.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

   
    return (
        <div className="todos _container">
            <Form  addElement={addElement}/>
            <ListItem 
                todo={todo} 
                remove={removeTodo}
                toggle={toggleTodo}
            />
        </div>
    )
}
