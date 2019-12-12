import React from 'react'
import formData from '../assets/formData.json'
import DynamicForm from "../components/DynamicForm";


export const Form = () => (
    <div>
        <DynamicForm formData={formData}/>
    </div>
)