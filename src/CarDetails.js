import React, { useRef } from "react";

export const CarDetails = ({initialData}) => {
    const _formRef = useRef()

    const handlesubmitForm = (e) => {
        e.preventDefault();
        const data = {};
        Array.from(_formRef.current.elements).forEach((el) => {
            if (el.name !== "") data[el.name] = el.value;
        })
        console.log(data);
        _formRef.current.reset()
    }

    return(
        <form ref={_formRef} onSubmit={handlesubmitForm}>
            <input name="model" defaultValue={initialData.model}/>
            <input name="year" defaultValue={initialData.year}/>
            <input name="color" defaultValue={initialData.color}/>
            <button type="submit">Save</button>
            <button type="reset">Reset</button>
        </form>
    )
}