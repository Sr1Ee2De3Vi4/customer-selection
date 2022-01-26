import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Weddingevejson from "../Wedding_eve/Wedding_eve.json";
import { GlobalContext } from "../../Services/Provider";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
function Wedding_eve_desk() {
  const {
    imagesPost,
    addSelectedImages,
    selectedImages,
    removeSelectedImages,
  } = useContext(GlobalContext);
  console.log(imagesPost);
  const handleSelect = (e) => {
    removeSelectedImages({
      index: 0,
      image:
        "https://images.unsplash.com/photo-1632177437111-814a9a72098e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      selection: false,
    });
  };

  console.log(selectedImages)

  return (
    <>
<ImageGallery imagesPost={imagesPost}/>
    </>
    // <div>
    //   <div className="grid grid-cols-8 pl-8 pr-12 pt-8 pb-8 ">
    //     {imagesPost.map((obj, index) => {
    //       return (
    //         <div className="pb-4 ">

            //  <input type="checkbox" id="myCheckbox1" /> 

              // <input type="checkbox" id="" name="topping" value="Paneer" checked={isChecked} onClick={handleOnChange} ></input>
               

              // <input
              //   type="checkbox"
              //   id="myCheckbox1"
              //   value={obj.id}
              //   onChange={handleSelect}
              // />
              // <label for="myCheckbox1"> </label>
              // <Link to={"/Wedding/" + obj.index}>
              //   <img className=" pt-4 pl-4 h-48 " src={obj.image} />
              // </Link>

              //  <Link to={"/Wedding/" + obj.id} >
              //   <img className=" pt-4 pl-4 data-uk-lightbox " src={obj.image} />
              //   </Link> 
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}

export default Wedding_eve_desk;
