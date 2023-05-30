import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key":"41225ef24amsh8e1061f768c3f14p1f8b54jsna343a5b1019c",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
// =================================IMP FOR YOU==========================================
//    You can get easily your API KEY from there https://rapidapi.com/Glavier/api/youtube138/
