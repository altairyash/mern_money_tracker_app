import { useEffect, useState } from "react";
import "./transactions.css";
function Transactions({ addTransaction, setBalance }) {
    const [transactions, setTransactions] = useState([])
    async function getTransactions() {
        const url = `http://localhost:4000/api/transactions`
        const response = await fetch(url)
        return await response.json()
    }
    useEffect(() => {
        getTransactions().then(transactions => {
            setTransactions(transactions)
        })
    }, [addTransaction])
    console.log(transactions)
    let balance = 0;
    for (const item of transactions) {
        balance += item?.amount
    }
    console.log("balance: " + balance)
    setBalance(balance.toFixed(2))
    return (
        <>
            <div className="transactions-wrapper">
                {transactions.length > 0 && transactions.map(transaction=> (
                    <div className="transaction-wrapper" key={transaction.id}>
                        <div className="item-wrapper-qualitative">
                            <div className="name">{transaction.name}</div>
                            <div className="description">{transaction.description}</div>
                        </div>
                        <div className="item-wrapper-quantitative">
                            <div className={"amount " + (transaction.amount > 0 ? 'green' : 'red')}>${transaction.amount}</div>
                            <div className="date">{transaction.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Transactions