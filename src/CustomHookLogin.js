import { useState } from 'react';

export function useCustomHookLogin() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
        isDisabled: false
    })

    const ChangeInput = function handleChangeInput(event) {
        const {type, name, value, checked} = event.target


        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const OnLogin = function handleOnLogin() {
        console.log(data)
      }
    

    return { data, ChangeInput, OnLogin }
}