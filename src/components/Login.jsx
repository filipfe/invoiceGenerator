import { useState } from "react"

export default function Login({ setLogged }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    
    const logIn = () => {
        localStorage.setItem('invoice_login', JSON.stringify(credentials))
        return setLogged(true)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            fetch('https://services.divideproject.works/api/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(credentials)
            }).then(() => logIn())
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-bold">Log in</h1>
                <input className="py-2 px-5 shadow-xl rounded-2xl" type="email" onChange={e => setCredentials(prev => {
                    return {
                        ...prev,
                        email: e.target.value
                    }
                })} placeholder="Email" />
                <input className="py-2 px-5 shadow-xl rounded-2xl" type="password" onChange={e => setCredentials(prev => {
                    return {
                        ...prev,
                        password: e.target.value
                    }
                })} placeholder="Password" />
                <button className="py-2 px-5 rounded-xl bg-blue-400 text-white">Log in</button>
                <a className="text-blue-400 font-medium" href="https://services.divideproject.works/products/4">Gain access</a>
            </form>
        </div>
    )
}