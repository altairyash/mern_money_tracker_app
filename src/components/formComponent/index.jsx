import React from "react";

function FormComponent() {
    return (
        <>
            <div>
                <h1>$200.<span>00</span></h1>
                <form className="form-component">
                    <div className="details">
                        <input type="number" placeholder={"amount"} />
                        <input type="text" placeholder={"description"} />
                    </div>
                    <input type="datetime-local" placeholder={""} />
                </form>
            </div>
        </>
    )
}

export default FormComponent