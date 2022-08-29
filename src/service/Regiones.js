import axios from "axios";

const fetchRegiones = async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_URL}state`)
        const regiones = data
        return regiones
    } catch (error) {
        alert(error.message);
    }
}

export default fetchRegiones;