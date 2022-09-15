import Services from "./components/Services"
import Buyers from "./components/Buyer"
import Info from "./components/Info"
import Invoice from "./components/Invoice"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [invoice, setInvoice] = useState({
    info: {
      awayDate: '',
      finishDate: '',
      payment: '',
      paymentDate: ''
    },
    services: [],
    buyer: {
      name: '',
      company: '',
      NIP: '',
      address: '',
      postal: '',
      city: ''
    }
  })
  const [active, setActive] = useState(false)

  useEffect(() => {
    console.log(invoice)
  }, [invoice])

  return (
    <div className="relative flex items-center justify-center h-screen gap-14 px-10">
      {active ? <Invoice invoice={invoice} /> : 
      <>
        <Info setInvoice={setInvoice} invoice={invoice.info} />
        <Services setInvoice={setInvoice} invoice={invoice.services} />
        <Buyers setInvoice={setInvoice} invoice={invoice.buyer} />
      </>}
      <div className="absolute bottom-14 flex items-center gap-4">
        <button onClick={() => setActive(prev => !prev)} className={`${buttonStyles} ${active ? 'bg-red-400' : 'bg-green-400'}`}>{active ? 'Powrót' : 'Wygeneruj fakturę'}</button>
        {active ? <button className={`${buttonStyles} bg-green-400`}>Drukuj</button> : <></>}
      </div>
    </div>
  )
}


export const inputStyles = 'border-gray-400 border-[1px] px-4 mt-1 mb-2'
export const buttonStyles = 'py-2 px-4 text-white rounded'

export default App
