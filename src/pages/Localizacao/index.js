import './localization.css';
import Form from "../../Components/Form";
import Maps from "../../Components/Maps";


export default function Localizacao() {
    return(
        <div className="container_localization">
            <div className='img_Header'>
                <h1>Fale conosco</h1>
                <p>Teremos o maior prazer em lhe atender</p>
            </div>
            <div className="container_content_localization">
                <Form/>
                <Maps/>
            </div>
        </div>
        
    )
};