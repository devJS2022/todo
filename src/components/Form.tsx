import React, {useRef} from 'react';

interface Todos {
    addElement(title: string): void
}

export const Form: React.FunctionComponent<Todos> = ({addElement}) => {
    const refValue = useRef<HTMLInputElement>(null)

    const enterElement = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addElement(refValue.current!.value)
            refValue.current!.value = ''
        }
    }
    return (
        <input type="text" id='title' className="form__input" placeholder="Введите задачу" ref={refValue} onKeyDown={enterElement}/>
    )
}