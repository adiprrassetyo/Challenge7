import { GET_LIST_CARS } from "../../actions/carsAction";

const initialState = {
  getListCarsResult: false,
  getListCarsLoading: false,
  getListCarsError: false,
};

const car = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CARS:
      console.log("4. Masuk ke reducer", action);
      return {
        ...state,
        getListCarsResult: action.payload.data,
        getListCarsLoading: action.payload.loading,
        getListCarsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default car;
