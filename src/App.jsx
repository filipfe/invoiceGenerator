import Services from "./components/Services"
import Buyers from "./components/Buyer"
import Info from "./components/Info"
import Invoice from "./components/Invoice"
import { useEffect, useState } from "react"
import Credentials from "./components/Credentials"

const sellerFromLocalStorage = JSON.parse(localStorage.getItem('seller'))

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
  const [seller, setSeller] = useState(sellerFromLocalStorage)
  const [active, setActive] = useState('home')

  return (
    <div className="relative flex items-center justify-center h-screen gap-14 px-10">
      {active === 'invoice' ? <></> :
        <div className="flex items-center absolute left-20 top-12 gap-4">
          <h2 className="font-semibold text-xl">{seller ? seller.name : 'Sprzedawca'}</h2>
          <button onClick={() => setActive(active === 'credentials' ? 'home' : 'credentials')} className={`${buttonStyles} ${active === 'credentials' ? 'bg-red-400' : 'bg-blue-400'}`}>{active === 'credentials' ? 'Powrót' : seller ? 'Zmień dane' : 'Dodaj dane'}</button>
        </div>
      }
      {active === 'invoice' ? seller ? <Invoice invoice={invoice} seller={seller} /> : <button onClick={() => setActive('credentials')} className='text-red-400 font-semibold text-2xl'>Dodaj dane sprzedawcy</button> : active === 'credentials' ? <Credentials cred={seller} setCred={setSeller} /> :
      <>
        <Info setInvoice={setInvoice} invoice={invoice.info} />
        <Services setInvoice={setInvoice} invoice={invoice.services} />
        <Buyers setInvoice={setInvoice} invoice={invoice.buyer} />
      </>}
      {active === 'credentials' ? <></> : <div className="absolute bottom-14 flex items-center gap-4 print:hidden">
        <button onClick={() => setActive(active === 'invoice' ? 'home' : 'invoice')} className={`${buttonStyles} ${active === 'invoice' ? 'bg-red-400' : 'bg-green-400'}`}>{active === 'invoice' ? 'Powrót' : 'Wygeneruj fakturę'}</button>
        {active === 'invoice' && seller ? <button onClick={() => window.print()} className={`${buttonStyles} bg-green-400`}>Drukuj</button> : <></>}
      </div>}
    </div>
  )
}


export const inputStyles = 'border-gray-400 border-[1px] px-4 mt-1 mb-2'
export const buttonStyles = 'py-2 px-4 text-white rounded'

export default App
