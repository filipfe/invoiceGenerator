import { useState } from "react"
import { inputStyles } from "../App"
import { buttonStyles } from "../App"

export default function Credentials(props) {
    return (
        <div className="flex flex-col">
            <h2 className="font-semibold text-2xl mb-4">Seller details</h2>
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

    const handleRemove = () => {
        setCred(null)
        setSeller({
            name: '',
            company: '',
            NIP: '',
            address: '',
            postal: '',
            city: ''
        })
        localStorage.setItem('seller', JSON.stringify(null))
    }

    const Save = () => {
        return <button onClick={handleSave} className={`${buttonStyles} bg-green-400 hover:bg-green-600 transition-colors mt-4 max-w-max`}>Save</button>
    }

    const Remove = () => {
        return <button onClick={handleRemove} className={`${buttonStyles} bg-red-400 hover:bg-red-600 transition-colors mt-4 max-w-max`}>Delete</button>
    }

    return (
        <>
            <label htmlFor="name">Full name</label>
            <input className={inputStyles} value={seller.name} required onChange={e => setSeller({...seller, name: e.target.value})} type="text" id='name' name='name' />
            <label htmlFor="firma">Company</label>
            <input className={inputStyles} value={seller.company} required onChange={e => setSeller({...seller, company: e.target.value})} type="text" id='firma' name='firma' />
            <label htmlFor="nip">NIP</label>
            <input className={inputStyles} value={seller.NIP} required onChange={e => setSeller({...seller, NIP: e.target.value})} type="text" id='nip' name='nip' />
            <label htmlFor="adres">Address</label>
            <input className={inputStyles} value={seller.address} required onChange={e => setSeller({...seller, address: e.target.value})} type="text" id='adres' name='adres' />
            <label htmlFor="kod">Postal code</label>
            <input className={inputStyles} value={seller.postal} required onChange={e => setSeller({...seller, postal: e.target.value})} type="text" id='kod' name='kod' />
            <label htmlFor="Miasto">City</label>
            <input className={inputStyles} value={seller.city} required onChange={e => setSeller({...seller, city: e.target.value})} type="text" id='miasto' name='miasto' />
            <div className="flex items-center gap-4">
                <Save />
                {cred ? <Remove /> : <></>}
            </div>
        </>
    )
}