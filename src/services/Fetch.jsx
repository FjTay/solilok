import axios from "axios";

const fetchFunctions = {
  fetchData(lat, long, isShort) {
    return axios
      .get(
        isShort
          ? `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max&timezone=Europe%2FBerlin`
          : `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`
      )
      .then((res) => res.data);
  },
  fetchStarWars(idApi) {
    return axios
      .get(`https://swapi.py4e.com/api/planets/${idApi}`)
      .then((res) => res.data);
  },

  fetchResidents(URL) {
    return axios.get(URL).then((res) => res.data);
  },
};

export default fetchFunctions;
