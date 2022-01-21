const NotFoundPage = () => {
  console.log('Page Not Found!');
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <section className="text-center mx-6 lg:w-2/3">
        <img className="m-auto w-24 lg:w-48" src="https://github.com/pharmawala/pharmawala.com/raw/main/logo.png" />
        <h1 className="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience. We&rsquo;re performing some maintenance
            at the moment. You can always follow us on
            <a className="text-blue-700 font-semibold hover:underline hover:decoration-wavy" href="https://twitter.com/_pharmawala">Twitter</a> for more updates.
          </p>
          <p className="mt-4">Team Pharmawala</p>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
