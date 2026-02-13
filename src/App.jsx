import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog'


function App() {
    return (
        <div>
            <Navbar />


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                {/* <Route path="/services" element={<Services />} /> */}
                <Route path="/services/:id" element={<ServiceDetails />} />
            </Routes>


            <Footer />
        </div>
    )
}


export default App