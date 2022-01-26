import React,{useState} from 'react'
import img1 from '../../assets/x.svg'
import Weddingevejson from '../Wedding_eve/Wedding_eve.json'
function Demo() {
    
            
            {/* <ul>
              
  <li>
    <input type="checkbox" id="myCheckbox1" />
    <label for="myCheckbox1"><img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" /></label>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox2" />
    <label for="myCheckbox2"><img src="http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png" /></label>
  </li>
  <li>

    <input type="checkbox" id="myCheckbox3" />
    <label for="myCheckbox3"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label>
  </li>
</ul> */}
 const [isChecked, setIsChecked] = useState(false);

const handleOnChange = () => {
  setIsChecked(!isChecked);
};

return (
  <div className="App">
    Select your pizza topping:
    <div className="topping">
      <input type="checkbox" id="topping" name="topping" value="Paneer" checked={isChecked} onChange={handleOnChange} ></input>
      <img className=" pl-72 " src={img1} /> 
    </div>
    {/* <div className="result">
      Above checkbox is {isChecked ? "checked" : "un-checked"}.
    </div> */}
  </div>




       
    )
}

export default Demo
