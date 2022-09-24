const axios = require("axios");

const API_KEY = "i9nowqKkZLhpOGsENViaDnVfRfeOGhfxJcwvY06H";

export async function searchPark(inputText){
    // alert("THIS FUNCTION WAS CALLED")
    try {
        /**
         * Send GET request (or any other request type) to the server.
         */
        const apiRes = await axios.get(`http://developer.nps.gov/api/v1/parks?q=${inputText}&api_key=${API_KEY}`);
        const parkInfo = apiRes.data.data;
        // alert(Object.keys(res));
        // alert(res.data.data[0].fullName);
        /**
         * Return the response received from the server.
         */
        return parkInfo;
    } catch (err) {
        /**
         * If the request is rejected, then the catch method will be executed.
         */
        alert(err);
        console.log(err);
    }
}

