import { Fragment,useState } from 'react'
import Navbar from '../components/Navbar'
import Options from '../components/Options'
import '../css/ht.css'
import Submit from '../js/submit'

const HT = () => {
    const [Mssg,setMssg] = useState('')
    const [OptionValue,setOptionValue] = useState('none');
    const [Ans,setAns] = useState('')
    const [LastSelectedCoin,setLastSelectedCoin] = useState({Result:null,lastSelectedCoin:'none',index:{row:0,col:0}})

  return (
    <Fragment>
        <Navbar page='ht'/>
        <div className='ht'>
            <Options OptionValue={OptionValue} setOptionValue={setOptionValue}/>
            <p className='mssg'>{Mssg}</p>
            <button className='ht-submit' onClick={(e)=>{Submit(e,[OptionValue,LastSelectedCoin],[setOptionValue,setLastSelectedCoin,setAns,setMssg])}}>Submit</button>
            <div className='result'>{
              Ans
            }</div>
        </div>
    </Fragment>
  )
}

export default HT