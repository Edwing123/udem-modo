import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { Home } from './pages'
import { globalStyles } from './stitches.config'

const App = () => {
    globalStyles()

    return (
        <>
            <Header />
            <div className='page-container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default App
