import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{Authorization: "Client-ID DBCWn_uaFX2GMarFiBUk6_LECdD8Q67EoVVblkONWr4"}
})