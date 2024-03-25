import { showBasicSwal } from "../Contents/alert";

const Fetch = async (url, method = "GET", body = null, headers = null) => {
  return await fetch(url, {
    method: method,
    body: body,
    headers: headers
      ? headers
      : {
          accept: "application/json",
        },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (!data || !data.success) {
        data.message = data.message ? data.message : "internal server error";
        showBasicSwal("Error", "error", data.message);
        return data;
      } else {
        return data;
      }
    })
    .catch((err) => {
      console.clear();
      console.log(err);
      err = err ? err : "something went wrong";
      showBasicSwal("Error", "error", err);
    });
};

export default Fetch;
