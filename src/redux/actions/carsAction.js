import axios from "axios";

export const GET_LIST_CARS = "GET_LIST_CARS";

export const getListCar = () => {
  console.log("2. Masuk action getListKontak");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_CARS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. Berhasil Dapat Data", response.data);
        // berhasil get api
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal Dapat Data", error);
        // gagal get api
        dispatch({
          type: GET_LIST_CARS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        }); // end dispatch
      });
  };
};
