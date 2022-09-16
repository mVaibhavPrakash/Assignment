import '../css/options.css'
const Options = (props) => {
  return (
    <label className='ht-label'>
        Select either Head or Tell
        <select className='ht-select' value={props.OptionValue} onChange={(e)=>{props.setOptionValue(e.target.value)}}>
            <option className='ht-val' value='select'>select value</option>
            <option className='ht-val' value='H'>H</option>
            <option className='ht-val' value='T'>T</option>
        </select>
    </label>
  )
}

export default Options