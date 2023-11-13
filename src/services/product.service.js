import axios from "axios";

export const getProducts = (callback) => {
    axios.get('http://alan_resto_be.test/api/product')
        .then((response) => {
            callback(response.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
}