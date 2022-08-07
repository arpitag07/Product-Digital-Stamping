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