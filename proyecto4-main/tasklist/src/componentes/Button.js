import React from "react";
import ListTasks from "./ListTasks";

function ButtonAll(props){
    const typeButton = props.type === "pending" ? () => {
        return (
            <div>
                div de boton pendiente
            </div>)
    } : "si"
    console.log(ListTasks.tasks)
    return (
        <div>
            <button type=""></button>
        </div>
    )
}

export default ButtonAll;