import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ComponentsPage from './Components/UIComponents'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import ComponentGenerator from './Components/Gc'
import CliInstallation from './Components/CliInstallation'

function App() {

  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/cli-installation" element={<CliInstallation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/generate" element={<ComponentGenerator />} />
        </Routes>
        <Footer />
      </Router>

  )
}

export default App
