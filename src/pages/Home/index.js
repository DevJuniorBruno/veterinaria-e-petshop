import './home.css';
import { Link } from 'react-router-dom';
import Caminhao from '../../img/caminhao.png';
import Localizacao from '../../img/localizacao.png';
import Medicamento from '../../img/medicamentos.jpeg';
import Telefone from '../../img/telefone.jpeg';

function Home() {
    return(
        <div>
            <main>
                <section className='module parallax parallax-1'>  
                    <h1 id='saibamais'>Clínica Veterinária Simplesvet </h1>
                    <div className='divButton'>
                        <Link className='button' to='clinica'>Saiba mais</Link>
                    </div>
                </section>

                <section className='module_content'>
                    <div className='icones-links'>
                    <Link to="clinica" >
                        <img className='caminhao' to='clinica' src={ Caminhao } alt="caminhao-link" />
                        <p>Táxi Dog</p>
                    </Link> 
                    </div>
                    <div className='icones-links'>
                    <Link to="localizacao" >
                        <img className='localizacao' to='localizacao' src={ Localizacao } alt="caminhao-link" />
                        <p>Localização</p>
                    </Link> 
                    </div>
                    <div className='icones-links'>
                        <Link to='servicos'>
                            <img className='medicamento' src= { Medicamento} alt='medicamentos-link'  />
                            <p>Medicamentos</p>
                        </Link>
                    </div>
                    <div className='icones-links'>
                        <Link to='contato'> 
                        <img className='telefone' src= {Telefone} alt="telefone-link" />
                        <p>Telefone</p>
                        </Link>
                    </div>
                </section>

                <section className='module info'>
                   <div className='container-infos'>
                    <h2>Entre em contato</h2>
                        <p>
                            Teremos o maior prazer em lhe atender.
                        </p>
                        <div className='divButton'>
                            <Link className='button' to='clinica'>Contato</Link>
                        </div>

                    </div>
                   </section>

            </main>
        </div>
        
        
    )
}

export default Home;
