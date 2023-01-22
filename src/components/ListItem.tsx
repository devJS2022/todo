import React from 'react';
import { classicNameResolver } from 'typescript';

interface todoArr {
    todo: any[]
}

export const ListItem: React.FunctionComponent<todoArr> = ({ todo }) => {
    return(
        <div className="list-item">
            <ul>
                {
                    todo.map(item => {
                        const classes=['list-item__items']
                        if (item.completed) {
                            classes.push('completed')
                        }
                        return (
                            <li className={classes.join(' ')}>
                                <input 
                                    type="checkbox" 
                                    className='list-item__input' 
                                    checked={item.completed}
                                />
                                <span className='list-item__title'>{item.title}</span>
                                <span>Close</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}