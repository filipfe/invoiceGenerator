import { useState } from "react"

export default function Invoice({ invoice, seller }) {
    const { info } = invoice
    const { buyer } = invoice
    const { services } = invoice
    const [summary, setSummary] = useState({
        net: services.map(service => (service.price * service.quantity)),
        gross: services.map(service => (service.price * service.quantity * 1.23).toFixed(2)),
        tax: services.map(service => (service.price * service.quantity * 0.23))
    })

    return (
        <div className="max-w-[10in] font-medium">
            <div className="grid grid-cols-2 gap-14">
                <div className="img"></div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200">Date of publish</h2>
                    <p className="text-center">{info.awayDate}</p>
                </div>
                <div className="img"></div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200">Date of service</h2>
                    <p className="text-center">{info.finishDate}</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200">Seller</h2>
                    <p>{seller.company}<br />{seller.name}</p>
                    <p>NIP: {seller.NIP}</p>
                    <p>{seller.address}, {seller.city}</p>
                    <p>{seller.postal} {seller.city}</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200 min-w-[3in]">Buyer</h2>
                    <p>{buyer.company} {buyer.name}</p>
                    <p>NIP: {buyer.NIP}</p>
                    <p>{buyer.address}</p>
                    <p>{buyer.postal} {buyer.city}</p>
                </div>
            </div>
            <h1 className="font-bold text-4xl text-center my-8">Invoice VAT {info.awayDate}</h1>
            <div className="grid grid-cols-invoice gap-x-8 gap-y-1">
                <h3>No.</h3>
                <h3>Name of product or service</h3>
                <h3>Quantity</h3>
                <h3>Net price</h3>
                <h3>Net value</h3>
                <h3>VAT rate</h3>
                <h3>VAT value</h3>
                <h3>Gross value</h3>
                {services.map((service, i) => <Service {...service} id={i} key={service} />)}
                <h3 className="font-semibold col-[4/5]">Total:</h3>
                <h3 className="font-semibold col-[5/6]">{summary.net.reduce((prevPrice, price) => parseFloat(prevPrice) + parseFloat(price), 0)} zł</h3>
                <h3 className="font-semibold col-[6/7]">23%</h3>
                <h3 className="font-semibold col-[7/8]">${summary.tax.reduce((prevPrice, price) => parseFloat(prevPrice) + parseFloat(price), 0).toFixed(2)}</h3>
                <h3 className="font-semibold col-[8/9] text-xl">${summary.gross.reduce((prevPrice, price) => parseFloat(prevPrice) + parseFloat(price), 0).toFixed(2)}</h3>

            </div>
        </div>
    )
}

const Service = props => {
    return (
        <>
            <p>{props.id + 1}</p>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>${props.price}</p>
            <p>${props.price * props.quantity}</p>
            <p>23%</p>
            <p>${(props.price * props.quantity * 0.23).toFixed(2)}</p> {/* net */}
            <p>${(props.price * props.quantity * 1.23).toFixed(2)}</p> {/* gross */}
        </>
    )
}