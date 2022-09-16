import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import '../css/home.css'

const Home = () => {
  return (
    <Fragment>
        <Navbar page='home'/>
        <div className='home'>
            Home
        </div>
    </Fragment>
  )
}

export default Home