import axios from "axios";

const get = (id) => async (dispatch, getSate) => {
  var fetch = await axios.get("/locals/byid", {
    params: {
      _id: id,
    },
  });
  if (fetch.data.status != "ok") {
    //disparar error aqui
    return;
  }
  dispatch({ type: "user@get", payload: fetch.data.local });
};

export default get;
