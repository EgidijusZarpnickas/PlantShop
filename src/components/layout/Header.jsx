import '../componentsStyle/topBanner.scss'
import logo from '../../assets/Logo.svg'
import search from '../../assets/Search.svg'
import cart from '../../assets/cart.svg'
import '../componentsStyle/header.scss'
import { NavLink,Link } from 'react-router'

export default function Header() {



  return (
   <>
    <div className="header-bg">
            <div className="wrapper header">
                <a href="#"><img src={logo} alt='logo'></img></a>
                <nav className='header-nav'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </nav>
                <div className='header-side'>
                    <div className='side-search'>
                        Search
                        <img src={search} alt='search'></img>
                    </div>
                    <div className='side-cart'>
                       <Link to='cart'><img src={cart} alt='cart'></img></Link>
                    </div>
 
                </div>
 
            </div>
 
        </div>
   
   </>

  )
}


