import './form.css'
import emailjs from '@emailjs/browser';
import {useState} from 'react';

export default function Footer() {

    const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[message, setMessage] = useState('');

function sendEmail(e){
    e.preventDefault();

    if(name === "" || email === "" || message === ""){
        alert("Preencha todos os campos");
        return;
    }

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    }

    emailjs.send("service_sm92grr", "template_om1nig4", templateParams ,'rnRNt0HPmkK7VUCM2')
    .then((response)=>{
        console.log("email enviado", response.status, response.text);
        setName("")
        setEmail("")
        setMessage("")
    }, (err) =>{
        console.log(err)
    })

}

return(
    <div className='contact'>
    <h1 className='title_Contact'>Informações de Contato</h1>
    <p>
        Utilize deste formulárop de contato para tirar dúvidas
        ou obter maiores Informações. Se preferir utilize nosso e-mail ou telefone.
    </p>
    <p><strong>Telefone: </strong>(xx) 97382 8394</p>
    <p><strong>E-mail: </strong>emailprofissional@gmail.com</p>

    <form className='form' onSubmit={sendEmail} >
        <input 
            className='input'
            type='text'
            placeholder="Digite seu nome"
            onChange={ (e)=> setName(e.target.value)}
            value={name}
        />
        
        <input 
            className='input'
            type='text'
            placeholder="Digite seu email"
            onChange={ (e)=> setEmail(e.target.value)}
            value={email}
        />

        <textarea 
            className='textArea'
            placeholder="Digite sua mensagem..."
            onChange={ (e)=> setMessage(e.target.value)}
            value={message}
        />

        <input className='button_Contact' type="submit" value="enviar" />
    </form> 
</div>
)


}

