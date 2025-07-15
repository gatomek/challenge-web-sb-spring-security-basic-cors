import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [uuid, setUuid] = useState('')

    const uuidUrl = "http://localhost:8080/api/uuid"

    useEffect(() => {
        updateUuid();
    }, [])

    const updateUuid = () => {
        fetch(uuidUrl, {
                headers: {
                    "Authorization": "Basic dXNlcjpwYXNzd29yZA=="
                }
            }
        )
            .then(res => res.json())
            .then(txt => setUuid(txt))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <p>
                    {uuid}
                </p>
                <p>
                    <button onClick={() => updateUuid()}>UUID Refresh</button>
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
