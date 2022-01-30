import { useContext } from 'react';
import Hero from '../partials/Hero';
import ItemCard from '../components/ItemCard';
import ItermCardLoading from '../components/ItermCardLoading';
// import nfts from '../partials/Nav';

function Dashboard() {
  let nftData = [];
  
  // Fetch Contract Data
  if(window.contract) {
    console.log('contract:', window.contract);
  }

  let nftCards = [];
  console.log('nftCards:', nftCards);
  if (nftData.length > 0) {
    nftCards = nftData.map(function(nftItemData){
      return <ItemCard data={nftItemData} />
    });
  } else {
    nftCards = <ItermCardLoading />
  }
  return [
    <Hero title="My NFTs" description="" key="dashboard-hero" />,
    <div key="dashboard-cards" className="min-h-screen flex justify-center py-50">
      {nftCards}
    </div>
  ];
}

export default Dashboard;
