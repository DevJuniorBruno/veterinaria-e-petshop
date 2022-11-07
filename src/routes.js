import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Localizacao from './pages/Localizacao';
import Header from './Components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/localização' element={<Localizacao/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;