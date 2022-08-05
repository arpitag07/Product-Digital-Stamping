import React,{ Component } from "react";

class ViewS extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        // this.state = { card: ""};
    }
    render() {
        return (
            <div className="body">
                <div className="product-list">
                    <div className="header">Select product</div>
                    <div liclass="list">
                        <label>product</label>
                        <input
                        type="text"
                        name="list of product"
                        liclass="list"
                        />
                    </div>
            
                </div>
            </div>
        );
    }
}
export default ViewS;