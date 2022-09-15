export default function Invoice({ invoice }) {
    const { info } = invoice
    const { buyer } = invoice
    const { services } = invoice
    return (
        <div className="max-w-[60%] font-medium">
            <div className="grid grid-cols-2 gap-14">
                <div className="img"></div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200">Data wystawienia faktury</h2>
                    <p>{info.awayDate}</p>
                </div>
                <div className="img"></div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200">Data wykonania usługi</h2>
                    <p>{info.finishDate}</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200">Sprzedawca</h2>
                    <p>Example</p>
                    <p>Example</p>
                    <p>Example</p>
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-center font-semibold text-lg mb-2 bg-gray-200 min-w-[3in]">Nabywca</h2>
                    <p>{buyer.company} {buyer.name}</p>
                    <p>NIP: {buyer.NIP}</p>
                    <p>{buyer.address}</p>
                    <p>{buyer.postal} {buyer.city}</p>
                </div>
            </div>
            <h1 className="font-bold text-4xl text-center mt-12 mb-8">Faktura VAT {info.awayDate}</h1>
            <div className="grid grid-cols-invoice gap-x-8">
                <h3>L.p.</h3>
                <h3>Nazwa towaru lub usługi</h3>
                <h3>Ilość</h3>
                <h3>Cena netto</h3>
                <h3>Wartość netto</h3>
                <h3>Stawka VAT</h3>
                <h3>Kwota VAT</h3>
                <h3>Wartość brutto</h3>
                {services.map((service, i) => <Service {...service} id={i} key={service} />)}
            </div>
        </div>
    )
}

const Service = props => {
    console.log(props.id + 1)
    return (
        <>
            <p>{props.id + 1}</p>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.price} zł</p>
            <p>{props.price * props.quantity} zł</p>
            <p>23%</p>
            <p>{props.price * 0.23} zł</p>
            <p>{props.price * props.quantity * 1.23} zł</p>
        </>
    )
}