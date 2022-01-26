import React, { createContext, useReducer } from "react";
import { IMAGES_INITIAL } from "./intialstates/weddingImages";
import imagesReducer from "./reducers/imagesReducer";
export const GlobalContext = createContext({ ...IMAGES_INITIAL });

const GlobalProvider = ({ children }) => {
  const [store, dispatch] = useReducer(imagesReducer, IMAGES_INITIAL);
  const { imagesPost, selectedImages } = store;
  //actions
  function addSelectedImages(selected) {
    dispatch({
      type: "ADD_SELECTION",
      payload: selected,
    });
  }
  function removeSelectedImages(selected) {
    dispatch({
      type: "REMOVE_SELECTION",
      payload: selected,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        imagesPost,
        addSelectedImages,
        selectedImages,
        removeSelectedImages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
