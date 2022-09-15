import { useEffect, useState } from "react"
import { inputStyles } from "../App"
import { buttonStyles } from "../App"

export default function Services({setInvoice, invoice}) {
    const [services, setServices] = useState(invoice)

    useEffect(() => {
        setInvoice(prev => {
            return {
                ...prev,
                services
            }
        })
    }, [services])

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="font-semibold text-2xl">Usługi</h2>
                <button className={`${buttonStyles} bg-blue-400`} onClick={() => setServices(prev => prev.concat(
                    {
                        name: '',
                        quantity: '',
                        price: ''
                    }
                ))}>Nowa</button>
            </div>
            <div className="flex flex-wrap gap-4">
                {services.map((serv, i) => <Service i={i} setServices={setServices} services={services} key={i} />)}
            </div>
        </div>
    )
}

const Service = ({ i, setServices, services }) => {
    return (
        <div className="flex-col flex">
            <label htmlFor="name">Nazwa towaru lub usługi</label>
            <input value={services[i].name} onChange={e => {
                let newArr = [...services]
                newArr[i].name = e.target.value
                setServices(newArr)
            }} className={inputStyles} type="text" id='name' name='name' />
            <label htmlFor="ilosc">Ilość</label>
            <input value={services[i].quantity} onChange={e => {
                let newArr = [...services]
                newArr[i].quantity = e.target.value
                setServices(newArr)
            }} className={inputStyles} type="number" id='ilosc' name='ilosc' />
            <label value={services[i].price} htmlFor="cena">Cena netto w zł</label>
            <input onChange={e => {
                let newArr = [...services]
                newArr[i].price = e.target.value
                setServices(newArr)
            }} className={inputStyles} type="number" id='cena' name='cena' />
            <button className={`${buttonStyles} bg-red-400 mt-4 max-w-max`} onClick={() => setServices(prev => prev.slice(0,i).concat(prev.slice(i+1)))}>Usuń</button>
        </div>
    )
}