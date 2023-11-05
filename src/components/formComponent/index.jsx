import React, { useState } from "react";
import "./formComponent.css";
import { transaction_endpoint } from '../../utils/appConstants';
import Loader from "../loader";
import { useGlobalState } from '../../context/GlobalStateContext';
function FormComponent() {
    const { setAddTransaction, balance } = useGlobalState();
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const addNewTransaction = (e) => {
        setAddTransaction(true)
        setLoading(true)
        e.preventDefault()
        const url = `http://localhost:4000/api/${transaction_endpoint}`
        console.log(url)
        console.log(JSON.stringify({ amount: amount, date: date, name: name, description: description }))
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ amount: amount, date: date, name: name, description: description }),
        }).then(response => {
            response.json().then(json => {
                setAddTransaction(false)
                console.log("result", json)
                setAmount('')
                setDate('')
                setName('')
                setDescription('')
            })
            setLoading(false)
        })
    }
    const dollars = balance?.split('.')[0]
    const cents = balance?.split('.')[1]
    return (
        <>
            {loading && <Loader />}
            <div className="form-wrapper">
                <form
                    className="form-component"
                    onSubmit={addNewTransaction}
                >
                    <h1><span>${dollars}.<span>{cents}</span></span></h1>
                    <div className="details">
                        <input type="number"
                            placeholder={"ex : +500 -300"}
                            value={amount}
                            onChange={e => setAmount(e.target.value)}
                        />
                        <input type="date"
                            placeholder={""}
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    <input type="text"
                        placeholder={"title"}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="text"
                        placeholder={"description"}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button><span>add new transaction</span></button>
                </form>
            </div>
        </>
    )
}

export default FormComponent