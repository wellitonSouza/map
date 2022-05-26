import api from "../../Services/Api";

export async function getAllLocations() {
  return api()
    .get()
    .then((res) => res.data)
    .catch((error) => error);
}
