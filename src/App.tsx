import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { globalStyles } from './stitches.config'

const App = () => {
    globalStyles()

    return (
        <>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<h1>Hello World</h1>} />
                </Routes>
            </main>
        </>
    )
}

export default App
