import React from "react";


function FunComponent(props) {

    function ClickMe (){
        alert('button clicked');
    }

    return (
        <div>
            <h1> {props.name}</h1>
            <button className="btn btn-success" onClick={ClickMe}>Click Me</button>
        </div>

    )
}

export default FunComponent;