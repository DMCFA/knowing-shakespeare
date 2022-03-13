import Image from 'next/image';
const NoResults = () => {
  return (
    <div className='no-results-container'>
      <h2 className='no-results'>no results found!</h2>
      <Image
        className='loading-image'
        src='/shakespeare-gif.gif'
        alt='Confused Dog'
        width={340}
        height={340}
      ></Image>
    </div>
  );
};

export default NoResults;
