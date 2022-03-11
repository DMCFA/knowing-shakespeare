import axios from 'axios';

const baseURL = 'http://cosmic-elastic.eu.ngrok.io/shakespeare/_search';

const bodyData = {
  query: {
    match_phrase: {
      message: '',
    },
  },
};

export let failedRequest = false;

export const getData = async (searchStr) => {
  bodyData.query.match_phrase.message = searchStr;
  console.log(bodyData);
  try {
    const res = await axios.get(baseURL, bodyData);
    const data = res.data;
    console.log(data);
  } catch {
    console.log(error);
    failedRequest = true;
  }
};
