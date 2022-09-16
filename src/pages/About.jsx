import {Fragment} from 'react'
import Navbar from '../components/Navbar'
import '../css/home.css'

const About = (props) => {
  return (
    <Fragment>
        <Navbar page='about'/>
        <div className='about'>About</div>
    </Fragment>
  )
}

export default About