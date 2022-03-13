import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <Image
        className='welcome-image'
        src='/shakespeare-main.png'
        alt='Shakespeare dance colour man'
        width={520}
        height={450}
        responsive='true'
      />
    </div>
  );
};

export default Welcome;
