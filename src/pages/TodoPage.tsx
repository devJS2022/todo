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



   
    return (
        <div className="todos _container">
            <Form  addElement={addElement}/>
            <ListItem todo={todo}/>
        </div>
    )
}
