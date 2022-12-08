import React from "react";
import './clinica.css';
import Imagem from '../../img/greyhound-6563435_1920.jpg'

function Clinica() {
    return(
        <section>
        <div className="clinica_container">
           <h1>Clínica</h1>
           <p>Atendimento Veterinário</p>
        </div>
        <div className="info_container">
            <div className="img">
                <img className="img_child" src={Imagem} alt="dog_black" />
            </div>
            <div className="paragrafos">
                <p>
                    Possuimos uma equipe veterinária altamente qualificada
                    e atualizada para atender da melhor forma possível seu 
                    pet. Atendemos cães, gatos, aves e animais silvestres
                    , nosso corpo clinico é composto por diversos especialistas 
                    o que facilita um melhor diagnóstico e tratamento médico e 
                    cirúrgico para seu melhor amigo.
                 </p>
                 <p>
                 Com nossa sala cirúrgica completa com equipamentos modernos que 
                 tornam nossos procedimentos seguros e eficazes. Mantemos um 
                 controle rigoroso de higiene e esterilização de nossos materiais.
                 </p>
                 <p>
                 Nossos clientes também contam com o conforto de nosso
                  Taxi-dog para trazer os animais para consultas, além de exames 
                  laboratoriais e ultrassonografia com horário marcado.
                 </p>
                 <p>
                 Oferecemos atendimento especializado com consultas em horário 
                 pré-agendados nas seguintes especialidades:
                 </p>
                 <div className="bold">
                    <p>- DERMATOLOGISTA</p>
                    <p>- ONCOLOGISTA</p>
                    <p>- ENDROCRINOLOGISTA</p>
                    <p>- ORTOPEDISTA</p>
                    <p>- OZONIOTERAPIA</p>
                    <p>- EM BREVE ESTAREMOS AGREGANDO NOVOS PROFISSIONAIS E ESPECIALIDADES</p>
                 </div>
            </div>
        </div>
        </section>
        
    )
}
export default Clinica;