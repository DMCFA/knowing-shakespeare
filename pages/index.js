import Head from 'next/head';
import react, { useState, useEffect } from 'react';

//components
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
import Welcome from '../components/Welcome';
import Results from '../components/Results';
import NoResults from '../components/NoResults';

//api
import { getData, failedRequest } from './api/quotes';

const initialStatus = {
  welcome: true,
  loading: false,
  error: false,
};

export default function Home() {
  const [status, setStatus] = useState(initialStatus);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [newSearch, setNewSearch] = useState(false);

  const something = 'henry';

  useEffect(() => {
    console.log(status);
    if (newSearch) {
      setStatus({
        ...status,
        welcome: false,
        loading: true,
      });
      setNewSearch(false);
      try {
        getData(query).then((results) => {
          setData(results);
          console.log(data);
          setStatus({
            ...status,
            loading: false,
          });
        });
      } catch {
        setStatus({
          ...status,
          loading: false,
          error: true,
        });
        console.log(error);
      }
    }
  }, [newSearch, query, status]);

  const displayStatus = () => {
    if (status.welcome == true) {
      return <Welcome />;
    } else if (status.loading == true) {
      return <Loading />;
    } else if (status.error == true || failedRequest) {
      return <NoResults />;
    }
    return <Results results={data} />;
  };
  return (
    <>
      <Head>
        <title>Knowing Shakespeare</title>
        <link rel='icon' href='/shakespeare-logo.png' />
      </Head>

      <main className='main-container'>
        <Nav />
        <h2>type your quote below</h2>
        <SearchBar setSearch={setQuery} newSearch={setNewSearch} />
        {displayStatus()}
      </main>

      <footer></footer>
    </>
  );
}
