import React from "react";
import './Person.css';

const Person = (props) => {
    return <div className="Person">
        <p onClick={props.click}>This is a {props.name}. I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type='text'
            onChange={props.changed}
            value={props.name}
            ></input>
    </div>
}
export default Person;