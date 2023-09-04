// const axios = require('axios'); // common js syntax
import axios from "axios";

export const info = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
};

// module.exports = { info };
// export default info;