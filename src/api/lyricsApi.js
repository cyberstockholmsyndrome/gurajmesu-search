import axios from "axios";

const baseUrl = "https://api.lyrics.ovh/v1/grimes/";

export const getLyrics = async value => {
  try {
    const response = await axios.get(`${baseUrl}${value}`);
    const lyrics = await response.data.lyrics;

    return lyrics;
  } catch (error) {
    console.log(error);

    return "Nie znaleziono utworu";
  }
};
