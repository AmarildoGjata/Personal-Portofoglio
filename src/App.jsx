import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'


function App() {
    return (
        <>
        <Navbar />
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/Contact" element = {<Contact/>}/>
                <Route path = "/About" element = {<About/>}/>
                <Route path = "/Services" element = {<Services/>}/>
            </Routes>
        </>
    )

}

export default App