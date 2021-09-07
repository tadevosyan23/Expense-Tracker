import React from 'react'
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {
    const { addTransaction } = React.useContext(GlobalContext)
    const [text , setText] = React.useState("")
    const [amount , setAmount] = React.useState(0)

    const onSubmit = e => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control" >
                    <label htmlFor="text" >Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text" />
                </div>
                <div className="form-control" >
                    <label htmlFor="amount" >Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
                </div>
                <button className="btn" >Add Transaction</button>
            </form>
        </>
    )
}