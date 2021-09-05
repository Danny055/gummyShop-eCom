import axios from "axios";

const instance =axios.create({
    // API 
    baseURL:'https://us-central1-cbd-ecom.cloudfunctions.net/api'
    
    //'http://localhost:5001/cbd-ecom/us-central1/api' 
});

export default instance;
