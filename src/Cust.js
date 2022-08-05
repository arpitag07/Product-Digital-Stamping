import React, { Component } from "react";
import "./Login.css";
class Cust extends Component {
    render() {
        return (
            <div className="container">
                <div className="left">
                    <div className="card">
                        <div className="inner-box" id="card">
                            <div className="card-front">
                                <h3>Product Image</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card">
                        <div className="inner-box" id="card">
                            <div className="card-front">
                                <h3>Product Name</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card">
                        <div className="inner-box" id="card">
                            <div className="card-front">
                                <h3>Article No.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card">
                        <div className="inner-box" id="card">
                            <div className="card-front">
                                <h3>Warranty Information</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="card">
                        <div className="inner-box" id="card">
                            <div className="card-back">
                                <h3>Other Information</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cust;