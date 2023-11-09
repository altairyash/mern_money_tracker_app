import { useEffect, useState } from "react";
import "./transactions.css";
import { useGlobalState } from '../../context/GlobalStateContext';
function Transactions() {
    const [transactions, setTransactions] = useState([])
    const { addTransaction, setBalance } = useGlobalState();
    let balance = 0.00;
    async function getTransactions() {
        const url = `http://localhost:4000/api/transactions`
        const response = await fetch(url)
        return await response.json()
    }
    useEffect(() => {
        async function fetchTransactions() {
            const transactions = await getTransactions()
            setTransactions(transactions)
        }
        fetchTransactions()
    }, [addTransaction])
    for (const item of transactions) {
        balance += item?.amount
    }
    setBalance(balance.toFixed(2))
    return (
        <>
            <div className="transactions-wrapper">
                {transactions?.length > 0 && transactions?.map(transaction => (
                    <div className="transaction-wrapper" key={transaction.id}>
                        <div className="item-wrapper-qualitative">
                            <div className="name">{transaction.name}</div>
                            <div className="description">{transaction.description}</div>
                        </div>
                        <div className="item-wrapper-quantitative">
                            <div className={"amount " + (transaction.amount > 0 ? 'green' : 'red')}>${transaction.amount}</div>
                            <div className="date">{transaction.date.split('T')[0]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Transactions