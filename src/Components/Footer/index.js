import './footer.css';
import { FaFacebook, FaLinkedinIn, FaGithub } from 'react-icons/fa';

 function Footer(){
    return(
        <footer>
            <div className='social_footer'>
                <div>
                    <p>© Simplesvet</p>
                </div>
                <div className='social_list'>
                    <ul>
                        <li>
                            <a target="blank" rel='external' href={'https://www.facebook.com/profile.php?id=100002376864543'}>
                                <FaFacebook/>
                            </a>
                            <a target="blank" rel='external' href={' https://www.linkedin.com/in/bruno-rosa-6956871b5/'}>
                            <FaLinkedinIn/>
                            </a>
                            <a targer='blank' rel='external' href={' https://github.com/DevJuniorBruno'}>
                            <FaGithub/>
                            </a>
                        </li>
                    </ul>
                </div>
                
                
            
            </div>
          
        </footer>
    )
}

export default Footer;