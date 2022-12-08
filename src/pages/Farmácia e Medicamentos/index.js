import './farmacia.css'
import DogGrande from "../../img/cachorro.png"

function Servicos() {
    return(
        <header className='servicos'>
            <div className='header_servicos'>
                    <h1>Farmácia</h1>
                    <p>Medicamentos</p>
            </div>
                <div className='container_infos_servicos'>
                    <div  className='infos_servicos'>
                        <h1>
                            Farmácia Veterinaria
                        </h1>
                        <p>Nosso setor de medicamentos e linha higiênica para pets possui 
                            uma grande variedade de produtos de uso veterinário, trabalhamos
                             com marcas de grande prestigio, por isso garantimos a boa 
                             qualidade na venda de nossos produtos
                        </p>
                    </div>
                    <div  className='infos_servicos'>
                        <h1>
                            Pet Shop
                        </h1>
                        <p>
                        Nosso estabelecimento conta também com uma loja completa abastecida 
                        com diversas marcas de rações e acessórios para todos os gostos. 
                        </p>
                    </div>
                </div>
                <div  className='dogGrande'>
                    <img src={DogGrande} alt="patas_animais" />
                </div>

        </header>
    )
}

export default Servicos;