import './banhoetosa.css';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import Dogimage from '../../img/catdog.jpeg';

function BanhoeTosa() {
    return(
        <div className='container_banhoetosa'>
            <div className="header_banhoetosa">
                <h1>
                    Banho e Tosa
                </h1>
                <p>Pet Shop</p>
            </div>
            <div className="container_content">
                <div className="content_introduction">
                    <div className='first_introduction'>
                        <h1>
                            Saúde e Cuidados para Cães e Gatos
                        </h1>
                        <p>
                            Na Simplesvet você encontra uma equipe de profissionais
                            altamente capacitados para realizar todos os tipos de tosas.
                        </p>
                    </div>
                    <div className='second_introduction'>
                    < BsChatRightQuoteFill size={30} style={{fill:'black'}} />
                       <p>
                       Para o banho e tosa utilizamaos equipamentos e produtos 
                        de última geração e profissionais muito bem treinados. As 
                        toalhas são esterilizadas por uma empresa terceirizada para que 
                        não ocorra a menor possibilidade de transmissões de doenças.
                       </p>
                    </div>
                    <div className='last_introduction'>
                        <p> <FaCheck style={{fill:'green'}} /> Tosa Higienica</p>
                        <p> <FaCheck style={{fill:'green'}}/> Tosa da Raça</p>
                        <p> <FaCheck style={{fill:'green'}}/> Tosa na Máquina</p>
                        <p> <FaCheck style={{fill:'green'}}/> Tosa na Tesoura</p>
                        <p> <FaCheck style={{fill:'green'}}/> Banho</p>
                        <p> <FaCheck style={{fill:'green'}}/> Condicionamento do Pelo</p>
                        <p> <FaCheck style={{fill:'green'}}/> Limpeza das Orelhas</p>
                        <p> <FaCheck style={{fill:'green'}}/> Corte das Unhas</p>
                    </div>
                </div>
                <div className='dogs_img'>
                <img className="img_dogcat" src={Dogimage} alt='dogimage'/>
                </div>
                <div className='upshot'>
                    <div className='upshot_child'>
                        <p>
                            Nosso banho e tosa conta com uma equipe qualificada e treinada para oferecer o melhor atendimento possível. com muito carinho e atenção seu amigo é sempre muito bem recebido. 

                            Realizamos diversos tipos de tosas, hidratação, e banhos terapêuticos com prescrição médica, nossa estrutura é ampla, com vidros que proporcionam uma visão geral do local para que você e nosso veterinário possa acompanhar o banho e a tosa de seu amigo com muita tranquilidade, trabalhamos com os melhores produtos do mercado e com o uso de toalhas individualizadas e devidamente esterilizadas por uma empresa terceirizada nesse segmento

                            Nosso banho e tosa atende com horário pré-agendado para oferecer um atendimento mais organizado e especializado para as necessidades de cada animal, contamos com serviços de taxi-dog e pacotes mensais de banho.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BanhoeTosa;