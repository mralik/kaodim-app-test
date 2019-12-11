import React from 'react'
import profile from '../assets/edit.png'
import form from '../assets/form.png'
import logo from '../assets/logo.png'

export const Home = () => (
    <div className="d-flex align-items-center justify-content-center flex-column home-page">

        <div className="logo-wrap mt-5 mt-md-0">
            <img src={logo} alt="logo"/>
        </div>

        <div className="mt-3 card-wrapper d-flex flex-column flex-md-row">
            <div className="card mr-0 mb-3 mb-md-0 mr-md-5">
                <div className="face face1">
                    <div className="content">
                        <img
                            src={profile} alt="profile"/>
                        <h3>Profile Page</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Please visit the page!</p>
                        <a href="/profile" className="btn btn-outline-primary w-100">Continue</a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img
                            src={form} alt="form"/>
                        <h3>Dynamic Form</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Please visit the page!</p>
                        <a href="/form" className="btn btn-outline-primary w-100">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)