import Hero from '../partials/Hero';
import ItemCard from '../components/ItemCard';
import ItermCardLoading from '../components/ItermCardLoading';

function Home() {
  let nftData = [];
  let nftCards = '';
  if (nftData.length > 0) {
    nftCards = nftData.map(function(nftItemData){
      return <ItemCard data={nftItemData} />
    });
  } else {
    nftCards = <ItermCardLoading />
  }
  return [
    <Hero key="home-hero" />,
    <div key="home-cards" className="min-h-screen flex justify-center py-50">
      {nftCards}
    </div>
  ];
}

export default Home;
