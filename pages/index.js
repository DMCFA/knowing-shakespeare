import Head from 'next/head';
import { useState, useEffect } from 'react';

//components
import Loading from '../components/Loading';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
import Welcome from '../components/Welcome';
import Results from '../components/Results';
import NoResults from '../components/NoResults';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

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
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (newSearch) {
      setStatus({
        ...status,
        welcome: false,
        loading: true,
      });
      setNewSearch(false);
      setQuery('');
      try {
        getData(query).then((results) => {
          setData(results.hits.hits);
          setStatus({
            ...status,
            loading: false,
            welcome: false,
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
  }, [newSearch, query, status, data]);

  const quotesPerPage = 5;
  const lastQuotetIdx = currentPage * quotesPerPage;
  const firstQuoteIdx = lastQuotetIdx - quotesPerPage;
  const currentQuotes = data.slice(firstQuoteIdx, lastQuotetIdx);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  const displayStatus = () => {
    if (status.welcome == true) {
      return <Welcome />;
    } else if (status.loading == true) {
      return <Loading />;
    } else if (status.error == true || failedRequest) {
      return <NoResults />;
    } else {
      return (
        <>
          <Results results={currentQuotes} />
          <Pagination
            quotesPerPage={quotesPerPage}
            totalQuotes={data.length}
            changePage={changePage}
          />
        </>
      );
    }
  };
  return (
    <>
      <Head>
        <title>Knowing Shakespeare</title>
        <link rel='icon' href='/shakespeare-logo.png' />
      </Head>

      <main className='main-container'>
        <Nav />
        <h2 className='quote'>type your quote below</h2>
        <SearchBar setQuery={setQuery} newSearch={setNewSearch} />
        {displayStatus()}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
