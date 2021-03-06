import axios from 'axios';

const baseURL = 'https://cosmic-elastic.eu.ngrok.io/shakespeare/_search';

const bodyData = {
  size: 100,
  query: {
    match_phrase: {
      text_entry: '',
    },
  },
};

export let failedRequest = false;

// @route    POST "/"
// @desc.    Get matching text entries
// @access   Public
export const getData = async (searchStr) => {
  bodyData.query.match_phrase.text_entry = searchStr;
  try {
    const res = await axios.post(baseURL, bodyData);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    failedRequest = true;
  }
};
