import React from "react";
import "./formComponent.css";
function FormComponent() {
    return (
        <>
            <div className="form-wrapper">
                <h1>$200.<span>00</span></h1>
                <form className="form-component">
                    <div className="details">
                        <input type="number" placeholder={"amount"} />
                        <input type="datetime-local" placeholder={""} />
                    </div>
                    <input type="text" placeholder={"name"} />
                    <input type="text" placeholder={"description"} />
                    <button>add new transaction</button>
                </form>
            </div>
        </>
    )
}

export default FormComponent