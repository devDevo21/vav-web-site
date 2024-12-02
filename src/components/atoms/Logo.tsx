import Image from 'next/image'
const logo = '/images/logo.jpg'

const Logo = () => (
  // <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
  //   TailNext
  // </span>
  <img
    src={logo}
    width={70}
    height={60}
    alt="Picture of the author"
    // layout="responsive"
  />

);

export default Logo;
