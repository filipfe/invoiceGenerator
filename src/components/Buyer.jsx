import { useState, useEffect } from "react"
import { inputStyles } from "../App"
import { buttonStyles } from "../App"

export default function Buyers({ setInvoice, invoice }) {
    const [buyer, setBuyer] = useState(Object.values(invoice).every(o => o === '') ? false : true)

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-4 justify-between mb-4">
                <h2 className="font-semibold text-2xl">Nabywca</h2>
                {!buyer ? <button className={`${buttonStyles} bg-blue-400`} onClick={() => setBuyer(true)}>Nowy</button> : <></>}
            </div>
            {buyer ?
                <>
                    <Buyer setInvoice={setInvoice} invoice={invoice} />
                    <button className={`${buttonStyles} bg-red-400 mt-4 max-w-max`} onClick={() => {setBuyer(false); setInvoice(prev => {
                        return {...prev, buyer: {
                            name: '',
                            company: '',
                            NIP: '',
                            address: '',
                            postal: '',
                            city: ''
                        }}
                    })}}>Usuń</button>
                </>
             : <></>}
        </div>
    )
}

const Buyer = ({ setInvoice, invoice }) => {
    const [buyer, setBuyer] = useState(invoice)

    useEffect(() => {
        setInvoice(prev => {
            return {
                ...prev,
                buyer
            }
        })
    }, [buyer]);

    return (
        <>
            <label htmlFor="name">Imię i nazwisko</label>
            <input className={inputStyles} value={buyer.name} onChange={e => setBuyer({...buyer, name: e.target.value})} type="text" id='name' name='name' />
            <label htmlFor="firma">Firma</label>
            <input className={inputStyles} value={buyer.company} onChange={e => setBuyer({...buyer, company: e.target.value})} type="text" id='firma' name='firma' />
            <label htmlFor="nip">NIP</label>
            <input className={inputStyles} value={buyer.NIP} onChange={e => setBuyer({...buyer, NIP: e.target.value})} type="text" id='nip' name='nip' />
            <label htmlFor="adres">Adres</label>
            <input className={inputStyles} value={buyer.address} onChange={e => setBuyer({...buyer, address: e.target.value})} type="text" id='adres' name='adres' />
            <label htmlFor="kod">Kod pocztowy</label>
            <input className={inputStyles} value={buyer.postal} onChange={e => setBuyer({...buyer, postal: e.target.value})} type="text" id='kod' name='kod' />
            <label htmlFor="Miasto">Miasto</label>
            <input className={inputStyles} value={buyer.city} onChange={e => setBuyer({...buyer, city: e.target.value})} type="text" id='miasto' name='miasto' />
        </>
    )
}