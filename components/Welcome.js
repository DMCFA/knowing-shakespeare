import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <Image
        src='/shakespeare-main.png'
        alt='Shakespeare dance colour man'
        width={400}
        height={300}
        responsive='true'
      />
    </div>
  );
};

export default Welcome;
