import Services from "./components/Services"
import Buyers from "./components/Buyer"
import Info from "./components/Info"
import Invoice from "./components/Invoice"
import { useEffect, useState } from "react"
import Credentials from "./components/Credentials"

const sellerFromLocalStorage = JSON.parse(localStorage.getItem('seller'))
const loginFromLocalStorage = JSON.parse(localStorage.getItem('invoice_login'))

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
  // const [available, setAvailable] = useState(undefined)
  const [seller, setSeller] = useState(sellerFromLocalStorage)
  const [active, setActive] = useState('home')

  // const checkIfAvailable = async userId => {
  //   const response = await fetch('https://services.divideproject.works/api/user/orders', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //           user_id: userId
  //       })
  //   }).then(res => res.json())
  //   .then(data => data.map(order => order.product_id_id))
  //   if(response.includes(4)) return setAvailable(true)
  //   else return setAvailable(false)
  // }
  let available = true;

  // useEffect(() => {
  //   if(loginFromLocalStorage) {
  //     checkIfAvailable(loginFromLocalStorage)
  //   } else setAvailable(false)
  // }, [])

  if(available) return (
    <div className="relative flex items-center justify-center h-screen gap-14 px-10">
      {active === 'invoice' ? <></> :
        <div className="flex items-center absolute left-20 top-12 gap-4">
          <h2 className="font-semibold text-xl">{seller ? seller.name : 'Seller'}</h2>
          <button onClick={() => setActive(active === 'credentials' ? 'home' : 'credentials')} className={`${buttonStyles} transition-colors ${active === 'credentials' ? 'bg-red-400 hover:bg-red-600' : 'bg-blue-400 hover:bg-blue-600'}`}>{active === 'credentials' ? 'Back' : seller ? 'Change details' : 'Add details'}</button>
        </div>
      }
      {active === 'invoice' ? seller ? <Invoice invoice={invoice} seller={seller} /> : <button onClick={() => setActive('credentials')} className='text-red-400 font-semibold text-2xl'>Add seller details</button> : active === 'credentials' ? <Credentials cred={seller} setCred={setSeller} /> :
      <>
        <Info setInvoice={setInvoice} invoice={invoice.info} />
        <Services setInvoice={setInvoice} invoice={invoice.services} />
        <Buyers setInvoice={setInvoice} invoice={invoice.buyer} />
      </>}
      {active === 'credentials' ? <></> : <div className="absolute bottom-14 flex items-center gap-4 print:hidden">
        <button onClick={() => setActive(active === 'invoice' ? 'home' : 'invoice')} className={`${buttonStyles} transition-colors ${active === 'invoice' ? 'bg-red-400 hover:bg-red-600' : 'bg-green-400 hover:bg-green-600'}`}>{active === 'invoice' ? 'Back' : 'Generate invoice'}</button>
        {active === 'invoice' && seller ? <button onClick={() => window.print()} className={`${buttonStyles} bg-green-400 hover:bg-green-600 transition-colors`}>Print</button> : <></>}
      </div>}
    </div>
  )
  if(available === false) return window.location.href = 'https://apps.divideproject.works'
}


export const inputStyles = 'border-gray-400 border-[1px] px-4 mt-1 mb-2'
export const buttonStyles = 'py-2 px-4 text-white rounded'

export default App
