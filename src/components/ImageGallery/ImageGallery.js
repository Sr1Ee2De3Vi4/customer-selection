import React, { useState } from 'react';

function ImageGallery(imagesPost) {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(false);
    const [imageUrl,setImageUrl]= useState("");

    const handleDialog = (url) => {
        console.log("cliekced dialog");
        setIsOpen(!isOpen);
        // setImageUrl(url);
    }

    const handleImageSelect = () => {
        console.log("slected");
        setSelected(!selected);
    }
    return (
        <>
            <div>
                <div className="grid grid-cols-8 pl-8 pr-12 pt-8 pb-8 ">

                 {imagesPost.imagesPost.map((obj, index) => (
                        <div className="pb-4 ">
                          
                            {/* <input type="checkbox" id="myCheckbox1" /> */}
                            {/* <input type="checkbox" id="" name="topping" value="Paneer" checked={isChecked} onClick={handleOnChange} ></input>
               */}

                            <input
                                type="checkbox"
                                id="myCheckbox"
                                readOnly
                                // onChange={handleSelect}
                                checked={selected}
                                onChange={handleImageSelect}
                            />
                            <label for="myCheckbox1"> </label>

                            <img className=" pt-4 pl-4 h-48 "  src={obj.image} onClick ={handleDialog} />
                            {isOpen && (
                                <dialog
                                    class="dialog"
                                    open
                                    style={{ position: "absolute" }}
                                >
                                    <input
                                        type="checkbox"
                                        id="myCheckbox"
                                        // onChange={handleSelect}
                                        checked={selected}
                                        onChange={handleImageSelect}
                                    />
                                    <img onClick={handleDialog} src={imageUrl}  className=" pt-4 pl-4 h-48 " />
                                </dialog>
                            )}
                        </div>
                    
                    ))}
                </div>
            </div>
        </>
    )
}

export default ImageGallery;
