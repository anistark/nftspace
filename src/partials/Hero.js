// import { Link } from "react-router-dom";
// import FeaturedSlider from "./FeaturedSlider";

function Hero(data) {
  // console.log('data:', data);
  return (    
    <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 light:text-white md:text-4xl">{data.title}</h1>
            <p className="mt-6 text-gray-500 light:text-gray-300">{data.description}</p>
        </div>

        {/* <div className="flex justify-center mt-10">
          <FeaturedSlider />
        </div> */}
    </div>
  );
}

export default Hero;
