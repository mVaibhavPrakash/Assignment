import { Link} from 'react-router-dom'
import '../css/navbar.css'


const Navbar = (props) => {

    return (
        <nav className='lpage-nav'>
            {props.page==='home' ? null : <Link to={'/'} className='lpage-a' id="lpage-home" >Home</Link>}
            <div className={'lpage-navbarRight'}>
                <Link to={'/about'} className='lpage-a' id="lpage-about">About</Link> 
                <Link to={'/ht'} className='lpage-a' id="lpage-ht">Head & Tail</Link>
            </div>
        </nav>
    )
}

export default Navbar;
