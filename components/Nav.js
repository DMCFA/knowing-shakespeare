import Image from 'next/image';

const Nav = () => {
  return (
    <div className='nav-container'>
      <h1>knowing shakespeare</h1>
      <Image
        src='/shakespeare-nav.png'
        alt='Shakespeare image'
        width={100}
        height={50}
      ></Image>
    </div>
  );
};

export default Nav;
