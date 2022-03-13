import React, {Component} from "react";

class Name extends Component {
    constructor() {
        super();
        this.state = {
            name: "Tasnuva Zaman"
        }
    }

    clickMe =() => {
        this.setState({
            // name: "Changed Text"
            name: this.state.name === "Tasnuva Zaman" ? "John Doe" : "Tasnuva Zaman"
        })
    }

    render() {

        return (
            <div>
                <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
                <button className="btn btn-success" onClick={this.clickMe}>Change Text</button>
            </div>

        )
    }
}

export default Name;