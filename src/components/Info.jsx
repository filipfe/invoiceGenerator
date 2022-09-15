import { useState, useEffect } from "react"
import { inputStyles } from "../App"
import { buttonStyles } from "../App"

export default function Info({setInvoice, invoice}) {
    const [active, setActive] = useState(Object.values(invoice).every(o => o === '') ? false : true)

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-4 justify-between mb-4">
                <h2 className="font-semibold text-2xl">Ogólne informacje</h2>
                {!active ? <button className={`${buttonStyles} bg-blue-400`} onClick={() => setActive(true)}>Dodaj</button> : <></>}
            </div>
            {active ?
                <>
                    <Form setInvoice={setInvoice} invoice={invoice} />
                    <button className={`${buttonStyles} bg-red-400 mt-4 max-w-max`} onClick={() => {setActive(false); setInvoice(prev => {
                        return {...prev, info: {
                            awayDate: '',
                            finishDate: '',
                            payment: '',
                            paymentDate: ''
                        }}
                    })}}>Usuń</button>
                </>
             : <></>}
        </div>
    )
}

const Form = ({setInvoice, invoice}) => {
    const [info, setInfo] = useState(invoice)

    useEffect(() => {
        setInvoice(prev => {
            return {
                ...prev,
                info
            }
        })
    }, [info]);

    return (
        <>
            <label htmlFor="wystawienie">Data wystawienia</label>
            <input className={inputStyles} value={info.awayDate} onChange={e => setInfo({...info, awayDate: e.target.value})} type="date" id='wystawienie' name='wystawienie' />
            <label htmlFor="wykonanie">Data wykonania usługi</label>
            <input className={inputStyles} value={info.finishDate} onChange={e => setInfo({...info, finishDate: e.target.value})} type="date" id='wykonanie' name='wykonanie' />
            <label htmlFor="platnosc">Sposób płatności</label>
            <input className={inputStyles} value={info.payment} onChange={e => setInfo({...info, payment: e.target.value})} type="text" id='platnosc' name='platnosc' />
            <label htmlFor="terminplatnosci">Termin płatności</label>
            <input className={inputStyles} value={info.paymentDate} onChange={e => setInfo({...info, paymentDate: e.target.value})} type="date" id='terminplatnosci' name='terminplatnosci' />
        </>
    )
}