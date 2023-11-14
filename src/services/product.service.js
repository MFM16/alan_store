import axios from "axios";

export const getProducts = (callback) => {
    axios.get('https://alan.farhanmaulidian.site/public/api/product')
        .then((response) => {
            callback(response.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
}
