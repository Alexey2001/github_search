import React, {useContext, useState} from 'react'
import { AlertContext } from './context/alert/alertContext'
import {GithubContext} from "./context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('') //первый параметр всегда стейт а второй функция которая позволяет менять этот стейт
    const {show} = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if(event.key !== 'Enter') {
            return
        }
        if(value.trim()) {
            github.search(value.trim())
        } else {
            show('Введите данные пользователя')
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
                
            />
        </div>
    )
}