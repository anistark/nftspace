import {
  useContext,
  useState,
  useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../partials/Hero';
import ItemCard from '../components/ItemCard';
import ItermCardLoading from '../components/ItermCardLoading';
// import nfts from '../partials/Nav';

function NFTDetail() {
  const { tokenId } = useParams();
  console.log('tokenId:', tokenId);
  let nftData = [];
  
  // Fetch Contract Data
  // if(props.contract) {
  //   console.log('contract:', props.contract);
  // }

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
    <Hero title="NFT Detail" description="" key="dashboard-hero" />,
    <div key="dashboard-cards" className="flex justify-center min-h-screen py-50">
      NFT Card Detail...
    </div>
  ];
}

export default NFTDetail;
