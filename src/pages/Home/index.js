import './home.css';
import { Link } from 'react-router-dom';
import Caminhao from '../../img/caminhao.png'
import Localizacao from '../../img/localizacao.png'

function Home() {
    return(
        <div className='wraper'>
            <main>
                <section className='module parallax parallax-1'>  
                    <h1 className='saibamais'>Clínica Veterinária Simplesvet </h1>
                    <div className='divButton'>
                        <Link className='fourth' to='clinica'>Saiba mais</Link>
                    </div>
                </section>

                <section className='module content'>
                    <div className='icones-links'>
                    <Link to="clinica" >
                        <img className='caminhao' to='clinica' src={ Caminhao } alt="caminhao-link" />
                        <p>Táxi Dog</p>
                    </Link> 
                    </div>
                    <div className='icones-links'>
                    <Link to="localizacao" >
                        <img className='localizacao' to='localizacao' src={ Localizacao } alt="caminhao-link" />
                        <p>Táxi Dog</p>
                    </Link> 
                    </div>
                    <div className='icones-links'></div>
                    <div className='icones-links'></div>
                </section>

                <section className='module info'>
                   <div className='container-infos'>
                    <h2>Qalquer Texto Aqui</h2>
                        <p>
                            lorem imsasdasdasda ddasdsad sdasdadasdas asdmoackmascka scasmcsakmcsa aslckmaslsak
                        </p>
                        <p>
                            lorem imsasdasdasda ddasdsad sdasdadasdas asdmoackmascka scasmcsakmcsa aslckmaslsak
                        </p>
                    </div>
                   </section>

            </main>
        </div>
        
        
    )
}

export default Home;
