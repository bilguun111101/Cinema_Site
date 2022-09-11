const axios = require("axios")

export const TakeApi = async path => {
    const [data, setData] = useState([]);
    try {
        const res = await axios.get(path);
        res.forEach((el, idx) => {
            setData([...data, el]);
        });
    } catch(error) { console.log(error.message) }
    return data;
}