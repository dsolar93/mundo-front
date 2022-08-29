import axios from "axios";

const fetchCalles = async (id) => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_URL}street/${id}`)
        const calles = data
        return calles
    } catch (error) {
        alert(error.message);
        
    }
  }

  export default fetchCalles