import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import img1 from '../../assets/x.svg'
import img2 from '../../assets/Nextx.svg'
import img3 from '../../assets/Prevx.svg'
import Wedding_eve_desk from '../Wedding_eve/Wedding_eve_desk'
import Weddingevejson from '../Wedding_eve/Wedding_eve.json'

function Wedding(props) {

   
   
    const [selected, setSelected] = useState( Weddingevejson[props.match.params.index]);
   
    const indexplus = (index) => {
        if (index == 15) {
          index = -1;
        }
        console.log("worked");
        setSelected(Weddingevejson[index + 1]);
      };

    const indexminus = (index) => {
        if (index == 0){
            index = 15;
        }
        setSelected( Weddingevejson[index - 1]);
    };

    // console.warn(props)
    // const [check, setcheck] = useState(Weddingevejson[props.match.params.index])

    return (
        <div>
            <div className="grid grid-cols-3  mt-8 ">
                <div> 
                    <img  className="pt-48 pl-72" onClick={() => indexminus(selected.index)} src={img3} /> 
                </div>

                <div className="text-black ">
                <Link to={"/wedding_eve"} > <img   className=" pl-72 " src={img1} /> </Link>
                        <input type="checkbox" id="myCheckbox1" />
                        {/* <input type="checkbox" id="topping" name="topping" value="Paneer" checked={isChecked} onChange={handleOnChange} ></input> */}
                        <label for="myCheckbox1"> <img className="pl-12" src={selected.image} /></label>
                            {/* <img   className=" h-full object-cover " src={landing.image} /> */}
                </div>

                <div>
                    <img onClick={() => indexplus(selected.index)} className="pt-48 pl-8" src={img2} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(Wedding)
