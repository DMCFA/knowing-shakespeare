import Image from 'next/image';

const Loading = () => {
  return (
    <div className='loading-container'>
      <Image
        className='loading-image'
        src='/loading.svg'
        alt='Shakespeare GIF'
        width={500}
        height={480}
      ></Image>
    </div>
  );
};

export default Loading;
