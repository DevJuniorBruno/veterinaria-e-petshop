import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Clinica from './pages/Clinica';
import Servicos from './pages/Farmácia e Medicamentos';
import BanhoeTosa from './pages/Banho e Tosa';
import Localizacao from './pages/Localizacao';
import Contato from './pages/Contato';
import Header from './Components/Header';
import Footer from './Components/Footer';

function RoutesApp() {
    return(

        <BrowserRouter>

        <Header/>

            <Routes>
                <Route path = '/' element = { < Home /> } />
                <Route path = '/clinica' element = { < Clinica /> } />
                <Route path = '/servicos' element = { < Servicos /> } />
                <Route path = '/banhoetosa' element = {< BanhoeTosa />} />
                <Route path = '/localizacao' element = { < Localizacao /> } />
                <Route path = '/contato' element = { <Contato />} />
            </Routes>

        <Footer/>    
        
        </BrowserRouter>
    )
}

export default RoutesApp;