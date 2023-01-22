import React from 'react';
import { classicNameResolver } from 'typescript';

interface todoArr {
    todo: any[]
    remove(id:number): void
    toggle(id:number): void
}

export const ListItem: React.FunctionComponent<todoArr> = ({ todo, remove, toggle }) => {

    if (todo.length === 0) {
        return (
            <h1 className='title__null'>Задач нет...</h1>
        )
    }
    
    return(
        <div className="list-item">
            <ul className="list-item__list">
                { 
                    todo.map(item => {
                        const classes=['list-item__items']
                        if (item.completed) {
                            classes.push('completed')
                        }
                        return (
                            <li className={classes.join(' ')} key={item.id}>
                                <input 
                                    type="checkbox" 
                                    className='list-item__input' 
                                    checked={item.completed}
                                    onChange={toggle.bind(null, item.id)}
                                />
                                <span className='list-item__title'>{item.title}</span>
                                <span className="list-item__close" onClick={remove.bind(null, item.id)}></span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}