import axios from 'axios';

const baseURL = 'http://cosmic-elastic.eu.ngrok.io/shakespeare/_search';

const bodyData = {
  from: 10,
  size: 100,
  query: {
    match_phrase: {
      text_entry: '',
    },
  },
};
export let failedRequest = false;

export const getData = async (searchStr) => {
  bodyData.query.match_phrase.text_entry = searchStr;
  try {
    const res = await axios.post(baseURL, bodyData);
    const data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    failedRequest = true;
  }
};
