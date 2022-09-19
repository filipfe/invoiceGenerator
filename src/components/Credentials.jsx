import { useState } from "react"
import { inputStyles } from "../App"
import { buttonStyles } from "../App"

export default function Credentials(props) {
    return (
        <div className="flex flex-col">
            <h2 className="font-semibold text-2xl mb-4">Dane sprzedawcy</h2>
            <Form {...props} />
        </div>
    )
}

const Form = ({setCred, cred}) => {
    const [seller, setSeller] = useState(cred ? cred : {
        name: '',
        company: '',
        NIP: '',
        address: '',
        postal: '',
        city: ''
    })

    const handleSave = () => {
        setCred(seller)
        localStorage.setItem('seller', JSON.stringify(seller))
    }

    const Save = () => {
        return <button onClick={handleSave} className={`${buttonStyles} bg-green-400 mt-4 max-w-max`}>Zapisz</button>
    }

    return (
        <>
            <label htmlFor="name">Imię i nazwisko</label>
            <input className={inputStyles} value={seller.name} required onChange={e => setSeller({...seller, name: e.target.value})} type="text" id='name' name='name' />
            <label htmlFor="firma">Firma</label>
            <input className={inputStyles} value={seller.company} required onChange={e => setSeller({...seller, company: e.target.value})} type="text" id='firma' name='firma' />
            <label htmlFor="nip">NIP</label>
            <input className={inputStyles} value={seller.NIP} required onChange={e => setSeller({...seller, NIP: e.target.value})} type="text" id='nip' name='nip' />
            <label htmlFor="adres">Adres</label>
            <input className={inputStyles} value={seller.address} required onChange={e => setSeller({...seller, address: e.target.value})} type="text" id='adres' name='adres' />
            <label htmlFor="kod">Kod pocztowy</label>
            <input className={inputStyles} value={seller.postal} required onChange={e => setSeller({...seller, postal: e.target.value})} type="text" id='kod' name='kod' />
            <label htmlFor="Miasto">Miasto</label>
            <input className={inputStyles} value={seller.city} required onChange={e => setSeller({...seller, city: e.target.value})} type="text" id='miasto' name='miasto' />
            <Save />
        </>
    )
}