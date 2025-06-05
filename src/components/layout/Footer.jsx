import '../componentsStyle/footer.scss'
import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import linkedin from '../../assets/social/linkedin.svg'
import twitter from '../../assets/social/twitter.svg'
import youtube from '../../assets/social/youtube.svg'
import { NavLink } from 'react-router'

export default function Footer({isHomePage}) {



    return (

        <footer className={`footer ${isHomePage ? '' :  'light-bg'}`}>
            <div className='footer-menu wrapper'>
                <NavLink to='products'>Products</NavLink>
                <NavLink to='returns'>Returns</NavLink>
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='shipping'>Shipping</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact us</NavLink>
            </div>
                <div className='social-icons'>
                    <NavLink to='#'> <img src={youtube}></img></NavLink>
                    <NavLink to='#'> <img src={facebook}></img></NavLink>
                    <NavLink to='#'> <img src={twitter}></img></NavLink>
                    <NavLink to='#'> <img src={instagram}></img></NavLink>
                    <NavLink to='#'> <img src={linkedin}></img></NavLink>                    
                </div>
                 <div className='footer-banner green '>
                    <p className='wrapper'>Copyright Green thumb. All Rights Reserved</p>
                 </div>
            <img></img>
        </footer>

    )
}

// <a href=''> </a> ira keiciami i <NavLink to='#'> <img src={youtube}></img></NavLink> bet jie lieka aprasomi kaip a tagai