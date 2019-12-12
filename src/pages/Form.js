import React from 'react'
import data from '../assets/questions.json'
import DynamicForm from "../components/DynamicForm";

const elem = data.questions;
console.log('re', elem)

for (let i = 0; i < elem.length; i++) {
    console.log('eee', elem[i])
}
export const Form = () => (
    <div>
        <DynamicForm title={data.title}/>
        {/*<h1>aaM</h1>*/}
        {/*<React.Fragment>*/}
        {/*    /!*{elem.map(question => question.prompt)}*!/*/}
        {/*    {elem.map((value, index) => (<div key={index}>{ value.prompt + index }</div>))}*/}
        {/*</React.Fragment>*/}
    </div>



)