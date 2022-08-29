import axios from "axios";

const fetchCiudades = async (id) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_URL}city/${id}`)
        const ciudades = data
        return ciudades
    } catch (error) {
        alert(error.message);
    }
}

export default fetchCiudades;