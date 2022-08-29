import axios from "axios";

const fetchProvincias = async (id) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_URL}province/${id}`)
        const provincias = data
        return provincias;
    } catch (error) {
        alert(error.message);
    }

}

export default fetchProvincias