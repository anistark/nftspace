import {
  useContext,
  useState,
  useEffect
} from 'react';
import { ethers } from "ethers";

import Hero from '../partials/Hero';
import ItemCard from '../components/ItemCard';
import ItermCardLoading from '../components/ItermCardLoading';
import abi from '../contracts/huskyart/abi.json';

function Home() {
  var address = process.env.REACT_APP_CONTRACT_ADDRESS;
  var [nftCards, updateNFTCards] = useState(null);
  var [nfts, setNFTs] = useState([]);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  // var contract;

  const connectWalletHandler = async () => {
    if (window.ethereum && defaultAccount == null) {
        // set ethers provider
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const signer = await provider.getSigner();

        // connect to metamask
        window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
            // console.log('result:', result);
            setDefaultAccount(result[0]);

            // Contract Instance
            let contractClient = new ethers.Contract(
                address,
                abi,
                signer
            );
            // console.log('contractClient:', contractClient);
            fetchNFTs(contractClient);
            setContract(contractClient);
            // setState({contract: contractClient});
        })
        .catch((error) => {
            console.log('error:', error.message);
            // setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
        console.log("Need to install MetaMask");
        // setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    // document.title = `Hello Home`;
    // loadNFTs
    // console.log('address:', address);
    connectWalletHandler();
    // console.log('nfts:', nfts);
    loadNFTs(nfts);
    console.log('contract 2:', contract);
  }, [address, nfts, contract]);

  const loadNFTs = (nftData) => {
    // console.log('nftData:', nftData);
    // let nftCards = [];
    // console.log('nftCards:', nftCards);
    if (nftData.length > 0) {
      let n = 0;
      nftCards = nftData.map(function(nftItemData) {
        n += 1;
        // console.log('nftItemData:', nftItemData);
        return <ItemCard data={nftItemData} key={n} />
      });
    } else {
      console.log('No Data. Loading...');
      nftCards = <ItermCardLoading />
    }
    updateNFTCards(nftCards);
  }

  const fetchNFTs = async (contract) => {
    let i = 0;
    // let nfts = [];
    while (true) {
      // console.log('contract state:', this.state.contract);
        // console.log('fetching owner for token #', i);
        // console.log('contract:', contract);
        // let contractName = await contract.name();
        // console.log('contractName:', contractName);
        try {
            nfts[i] = {
                'tokenId': i,
                'owner': await contract.ownerOf(i),
                'uri': await contract.tokenURI(i)
            }
        } catch (error) {
            console.log('error:', error);
            // set nfts state
            // renderCards(nfts)
            // setNFTs(nfts);
            break;
        }
        setNFTs(nfts);
        loadNFTs(nfts);
        // console.log('nft #', i, ':', nfts[i]);
        i += 1;
    }
  }

  return [
    <Hero title="NFT Marketplace" description="Discover the most amazing forms of art and creatives. Own and trade with fellow admirers" key="home-hero" />,
    <div key="home-cards" className="flex justify-center min-h-screen py-50">
      {nftCards}
    </div>
  ];
}

export default Home;
