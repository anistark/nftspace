// import { Link } from "react-router-dom";
import FeaturedSlider from "./FeaturedSlider";

function Hero() {
  return (    
    <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
            <h1 class="text-3xl font-bold text-gray-800 light:text-white md:text-4xl">NFT Marketplace</h1>
            <p class="mt-6 text-gray-500 light:text-gray-300">Discover the most amazing forms of art and creatives. Own and trade with fellow admirers</p>
        </div>

        <div class="flex justify-center mt-10">
          <FeaturedSlider />
        </div>
    </div>
  );
}

export default Hero;
