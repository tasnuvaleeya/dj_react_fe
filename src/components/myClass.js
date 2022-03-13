import React, {Component} from "react";

class MyClass extends Component {


    render() {

        return (
            <div>
                <h1>{this.props.email}</h1>
                <button className="btn btn-primary" onClick={this.props.myClick}>Click</button>
            </div>

        )
    }
}

export default MyClass;