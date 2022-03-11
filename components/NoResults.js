import Image from 'next/image';
const NoResults = () => {
  return (
    <div>
      <h2>no results found!</h2>
      <Image
        className='loading-image'
        src='/error.jpg'
        alt='Confused Dog'
        width={500}
        height={480}
      ></Image>
    </div>
  );
};

export default NoResults;
