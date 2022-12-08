import './contato.css';
import MapPage from "../../Components/Maps";
import Form from "../../Components/Form";


function Contato() {
    return(
        <div className='container_Contato'>
        <div className='img_Header'>
          <h1>Fale conosco</h1>
          <p>Teremos o maior prazer em lhe atender</p>
        </div>
        <div className='container_Content_Contact'> 
                <MapPage/>
                <Form/>
            </div>
        </div>
    )

}

export default Contato;