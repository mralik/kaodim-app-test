import React from 'react'
import '../App.css';
import {H3} from "../style";
import profile from "../assets/profile.jpg";
import placeholder from "../assets/placeholder.jpg";
import {Accordion, InputGroup, Button, FormControl} from 'react-bootstrap';

export const Profile = () => (
    <div>

        <div className="navbar profile">
            <div className="navbar-brand">
                <img src={placeholder} alt="logo"/>
                <span className="ml-1">Kaodim</span>
            </div>
            <InputGroup className="">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><span className="fa fa-search"></span></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="What service do you need?"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="img-wrapper">
                    <img src={profile} alt="profile"/>
                </div>

            </div>
            <div className="card-body">
                <div className="user-detail">
                    <H3>Multi Indah Teknik</H3>
                    <p>Serving Since March 2017<span>. Verified</span></p>

                </div>
                <div className="user-rating">
                    <ul>
                        <li>
                            <span>1,323</span>
                            <span>Jobs completed</span>
                        </li>
                        <li>
                            <span>&#9733; 4.3</span>
                            <span>Jobs completed</span>
                        </li>
                        <li>
                            <span>805</span>
                            <span>Reviews</span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>

        <div className="row w-100 m-0 mt-4 content-section">
            <div className="col-12 col-md-7 pl-0 p-0 pr-md-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5>About</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of
                            Lorem Ipsum</p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5>Gallery</h5>

                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5>Rating & Reviews</h5>

                        <div className="row w-100 m-0 mb-3">
                            <div className="col-12 col-md-9 pl-0">
                                <ul className="ratings">
                                    <li>
                                        5
                                        <div className="bar-container">
                                            <div className="bar-5"></div>
                                        </div>
                                    </li>
                                    <li>
                                        4
                                        <div className="bar-container">
                                            <div className="bar-4"></div>
                                        </div>
                                    </li>
                                    <li>
                                        3
                                        <div className="bar-container">
                                            <div className="bar-3"></div>
                                        </div>
                                    </li>
                                    <li>
                                        2
                                        <div className="bar-container">
                                            <div className="bar-2"></div>
                                        </div>
                                    </li>
                                    <li>
                                        1
                                        <div className="bar-container">
                                            <div className="bar-1"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="d-flex flex-column">
                                    <h5 className="font-weight-bold text-center">4.3</h5>
                                    <div className="text-center">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <p className="small text-center">134 ratings</p>
                                </div>
                            </div>
                        </div>

                        <h5>Compliments</h5>

                        <div className="row w-100 m-0 mb-3">
                            <div className="col-12 col-md-6  pl-0 p-0 pr-md-2">
                                <div className="card compliments">
                                    <div className="card-body">
                                        <div>
                                            <img src={placeholder} alt="company"/>
                                        </div>
                                        <div>
                                            <h6 className="m-0">Reasonable price</h6>
                                            <span>120 compliments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6  pr-0 p-0 pl-md-2">
                                <div className="card compliments">
                                    <div className="card-body">
                                        <div>
                                            <img src={placeholder} alt="company"/>
                                        </div>
                                        <div>
                                            <h6 className="m-0">Excellent services</h6>
                                            <span>120 compliments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pl-0 p-0 pr-md-2">
                                <div className="card compliments">
                                    <div className="card-body">
                                        <div>
                                            <img src={placeholder} alt="company"/>
                                        </div>
                                        <div>
                                            <h6 className="m-0">Fast & Efficient</h6>
                                            <span>120 compliments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 pr-0 p-0 pl-md-2">
                                <div className="card compliments">
                                    <div className="card-body">
                                        <div>
                                            <img src={placeholder} alt="company"/>
                                        </div>
                                        <div>
                                            <h6 className="m-0">Value for money</h6>
                                            <span>120 compliments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="row w-100 m-0 mb-3">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <h5 className="m-0">Reviews</h5>
                                    <span className="small ml-2">Recently added</span><span
                                    className="fa fa-chevron-down ml-2"></span>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <div>
                                      <div className="review-wrap mb-3">
                                          <div className="mr-3">
                                              <img src={placeholder} alt="company"/>
                                          </div>
                                          <div className="d-flex flex-column w-100">
                                              <div className="d-flex align-items-center">
                                                  <div className="mr-3">
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                  </div>
                                                  <p className="m-0 font-weight-bold mr-2">Alex Tenorio</p>
                                                  <span className="small d-flex align-items-center">3 months ago</span>
                                              </div>
                                              <div>
                                                  <p>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting
                                                      industry. Lorem Ipsum has been the industry
                                                  </p>
                                              </div>
                                          </div>

                                      </div>
                                      <div className="review-wrap mb-3">
                                          <div className="mr-3">
                                              <img src={placeholder} alt="company"/>
                                          </div>
                                          <div className="d-flex flex-column w-100">
                                              <div className="d-flex align-items-center">
                                                  <div className="mr-3">
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                  </div>
                                                  <p className="m-0 font-weight-bold mr-2">Erika Mento</p>
                                                  <span className="small d-flex align-items-center">5 months ago</span>
                                              </div>
                                              <div>
                                                  <p>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting
                                                      industry. Lorem Ipsum has been the industry
                                                  </p>
                                              </div>
                                          </div>

                                      </div>
                                      <div className="review-wrap mb-3">
                                          <div className="mr-3">
                                              <img src={placeholder} alt="company"/>
                                          </div>
                                          <div className="d-flex flex-column w-100">
                                              <div className="d-flex align-items-center">
                                                  <div className="mr-3">
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                      <span className="fa fa-star"></span>
                                                  </div>
                                                  <p className="m-0 font-weight-bold mr-2">Mar Rueda</p>
                                                  <span className="small d-flex align-items-center">5 months ago</span>
                                              </div>
                                              <div>
                                                  <p>
                                                      +2 compliments
                                                  </p>
                                              </div>
                                          </div>

                                      </div>

                                      <div className="review-wrap mb-3">
                                          <div className="d-flex flex-column w-100">
                                              <button className="btn-outline-primary btn">Load more reviews</button>
                                          </div>

                                      </div>
                                  </div>

                                </Accordion.Collapse>
                            </Accordion>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5 pr-0 p-0 pl-md-3">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5>Need this service?</h5>
                        <p>Hire best service providers for your everyday needs from Kaodim</p>
                        <button className="btn btn-outline-primary btn-lg">Submit a request</button>

                        <ul>
                            <li>&#10003; Free insurance coverage</li>
                            <li>&#10003; Enjoy re-service or your money back if unsatisfactory</li>
                            <li>&#10003; Lowest price guaranteed</li>
                            <li>Terms & conditions apply</li>
                        </ul>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="mb=2">
                            <h5>Contact person</h5>
                            <p>Hire best service providers for your everyday needs from Kaodim</p>
                        </div>
                        <div className="mb=2">
                            <h5>Company Address</h5>
                            <p>
                                Mutiara Serdang, 6-31, Jalan <br/> Serdang Raya, 43300, <br/>
                                Seri Kembangan, Selangor
                            </p>
                        </div>

                        <div className="mb=2">
                            <h5>Registration no.</h5>
                            <p>002530879-H</p>
                        </div>


                    </div>
                </div>
                <div className="card mb-3 border-0 services">
                    <div className="card-body">
                        <h5 className="mb-4">Related Services</h5>

                        <div className="mb-3 d-flex justify-content-between">
                            <div className="mr-3"><img src={placeholder} alt="company"/></div>
                            <div>
                                <h6>Aircond services</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div>
                        </div>

                        <div className="mb=2 d-flex justify-content-between">
                            <div className="mr-3"><img src={placeholder} alt="company"/></div>
                            <div>
                                <h6>Plumbing Services</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
)