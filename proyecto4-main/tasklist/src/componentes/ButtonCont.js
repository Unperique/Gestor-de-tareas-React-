import React from "react";
import ButtonAll from "./Button";

function ButtonCont() {
    return (
        <div className="button-container">
            <ButtonAll type="completed"/>
            <ButtonAll type="pending"/>
            <ButtonAll type="all"/>
        </div>

    )
}
export default ButtonCont;