export default (state, action) => {
  switch (action.type) {
    case "ADD_SELECTION":
      return {
        ...state,
        selectedImages: [action.payload],
      };
    case "REMOVE_SELECTION":
      return {
        ...state,
        selectedImages: [],
      };
    default:
      return state;
  }
};
