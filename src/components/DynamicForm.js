import React from "react";
import ReactDOM from "react-dom"
import "../App.css";
import data from '../assets/questions.json'

export default class DynamicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            questions: [],
            index: 0,
            disabledNext: false,
            disabledPrev: true,
            questionTitle: 'd'
        }



    }


    getDerivedStateFromProps() {
        this.setState({question: data.questions})

    }
    componentDidMount() {
    }


    render() {
        let title = this.props.title || "Dynamic Form";
        const elem = data.questions;
        console.log('re', elem)
        let {selectedIndex, questions, isShow, index, disabledNext, disabledPrev, questionTitle} = this.state;
        const question =  this.state.questions[index]
        console.log('question', question)
            return (
                <div className="form-page d-flex align-items-center">
                    <div className="container">
                        <form>
                            <div className="card">
                                <div className="card-header p-3 d-flex align-items-center justify-content-center">
                                    <h6>{title}</h6>
                                </div>
                                <div
                                    className="card-body p-5 d-flex flex-column justify-content-center align-items-center">
                                    {/*<p>{questions[selectedIndex].prompt}</p>*/}
                                    {/*<p>{question.prompt}</p>*/}
                                    <div className="input-wrap">
                                        <input/>

                                    </div>

                                </div>

                                <div className="card-footer d-flex align-items-center justify-content-between bg-white">
                                    <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev}/>
                                    <Next toggle={(e) => this.toggleNext(e)} active={disabledNext}/>
                                </div>

                            </div>

                        </form>


                    </div>
                </div>
            );

    }


    togglePrev(e) {
        console.log('event', e)
        let index = this.state.index - 1;
        let disabledPrev = (index === 0);

        this.setState({index: index, disabledPrev: disabledPrev, disabledNext: false})
    }

    toggleNext(e) {
        console.log('event', e)
        let index = this.state.index + 1;
        let disabledNext = index === (this.state.questions.length - 1);

        this.setState({index: index, disabledNext: disabledNext, disabledPrev: false})
    }
}


function Prev(props) {
    return (
        <button className="btn btn-outline-primary w-25" onClick={props.toggle}
                disabled={props.active}>Previous</button>
    );
}

function Next(props) {
    return (
        <button className="btn btn-outline-primary w-25" onClick={props.toggle} disabled={props.active}>Next</button>
    );


}