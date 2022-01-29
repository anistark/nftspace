import logo from '../logo.png';

const NotFoundPage = () => {
  console.log('Page Not Found!');
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <section className="text-center mx-6 lg:w-2/3">
        <img className="m-auto w-24 lg:w-48" src={logo} alt="NFT Space" />
        <h1 className="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience. The page you're looking for is not found. You can always follow me on
            <a className="text-blue-700 font-semibold hover:underline hover:decoration-wavy" href="https://twitter.com/kranirudha">Twitter</a> for more updates.
          </p>
          <p className="mt-4">Team NFT Space</p>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
