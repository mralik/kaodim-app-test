import React from 'react'

export const DynamicForm = () => (
    <div className="form-page d-flex align-items-center">
        <div className="container">

            <div className="card">
                <div className="card-header p-3 d-flex align-items-center justify-content-center">
                    <h6>Tittle</h6>
                </div>
                <div className="card-body p-5 d-flex flex-column justify-content-center align-items-center">
                    <p>Question?</p>
                    <div className="input-wrap">
                        <input/>

                    </div>

                </div>

                <div className="card-footer d-flex align-items-center justify-content-between bg-white">
                    <button className="btn btn-outline-primary w-25">Prev</button>
                    <button className="btn btn-outline-primary w-25">Next</button>
                </div>

            </div>
        </div>
    </div>
)