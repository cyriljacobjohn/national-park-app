import axios from 'axios';

export function searchPark(inputText) {
    // Call the api
    const API_KEY = "i9nowqKkZLhpOGsENViaDnVfRfeOGhfxJcwvY06H";
    // let config = {'Authorization': API_KEY};
    // axios.get('https://developer.nps.gov/api/v0/parks?parkCode=yell', {headers: config})
    axios.get(`http://developer.nps.gov/api/v1/parks?q=${inputText}&api_key=${API_KEY}`)
    .then(res => {
        // alert(Object.keys(res));
        // alert(res.data.data[0].fullName);
        // console.log(res.data.data[0].fullName);
        // We get res.data.data
        // -> Loop through and 
    })
    .catch(err => {
        alert(err);
    })

};