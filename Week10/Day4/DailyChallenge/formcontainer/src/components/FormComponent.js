import React from "react";

const FormCompomnent = (props) => {
    return (
        <div>
            <h2>Entered information: </h2>
            <p>Your name: {props.info.firstName} {props.info.lastName}</p>
            <p>Your age: {props.info.age}</p>
            <p>Your gender: {props.info.gender}</p>
            <p>Your destination: {props.info.destination}</p>
            <p>Your dietary restrictions:</p>
            <div>
                <span>**Nuts free :  {props.info.nutsFree ? "Yes" : "No"} </span><br />
                <span>**Lactose free : {props.info.lactoseFree ? "Yes" : "No"} </span><br />
                <span>**Vegan meal :  {props.info.vegan ? "Yes" : "No"} </span>
            </div>
        </div>
    );
};

export default FormCompomnent;