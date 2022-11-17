import axios from "axios"

const getGeoLocation = async() =>{
    const response = await axios.get("https://geolocation-db.com/jsonp/249197e0-5605-11ed-824a-2ddf0a1ee024")
    return JSON.parse(response.data.split("callback")[1].replace("(", "").replace(")", ""))
}

export default getGeoLocation