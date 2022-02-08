import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from '../contracts/huskyart/abi.json';

// export function WalletHandler() {
//     // const [errorMessage, setErrorMessage] = useState(null);
//     // const [userBalance, setUserBalance] = useState(null);
//     const [connButtonText, setConnButtonText] = useState("Connect Wallet");
//     const [defaultAccount, setDefaultAccount] = useState(null);
//     const [provider, setProvider] = useState(null);
//     const [nfts, setNFTs] = useState([]);

//     var address = process.env.REACT_APP_CONTRACT_ADDRESS;

//     const connectWalletHandler = async () => {
//         if (window.ethereum && defaultAccount == null) {
//             // set ethers provider
//             const provider = await new ethers.providers.Web3Provider(window.ethereum);
//             setProvider(provider);
//             const signer = await provider.getSigner();

//             // connect to metamask
//             window.ethereum
//             .request({ method: "eth_requestAccounts" })
//             .then((result) => {
//                 // console.log('result:', result);
//                 setConnButtonText('');
//                 setDefaultAccount(result[0]);

//                 // Contract Instance
//                 var contract = new ethers.Contract(
//                     address,
//                     abi,
//                     signer
//                 );
//                 fetchNFTs(contract);
//                 // console.log('contract:', window.contract);
//             })
//             .catch((error) => {
//                 console.log('error:', error.message);
//                 // setErrorMessage(error.message);
//             });
//         } else if (!window.ethereum) {
//             console.log("Need to install MetaMask");
//             // setErrorMessage("Please install MetaMask browser extension to interact");
//         }
//     };

//     const fetchNFTs = async (contract) => {
//         let i = 0;
//         let nfts = [];
//         while (true) {
//             console.log('fetching owner for token #', i);
//             // console.log('contract:', contract);
//             // let contractName = await contract.name();
//             // console.log('contractName:', contractName);
//             try {
//                 nfts[i] = {
//                     'tokenId': i,
//                     'owner': await contract.ownerOf(i),
//                     'uri': await contract.tokenURI(i)
//                 }
//             } catch (error) {
//                 console.log('error:', error);
//                 // set nfts state
//                 // renderCards(nfts)
//                 setNFTs(nfts)
//                 break;
//             }
//             console.log('nft #', i, ':', nfts[i]);
//             i += 1;
//         }
//     }
//     return (
//         nfts
//     );
// }
const provider = new ethers.providers.Web3Provider(window.ethereum);

var contractClient = async (address) => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    console.log('provider:', provider);
    const signer = await provider.getSigner();
    console.log('signer:', signer);

    window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((result) => {
        console.log('Default Account:', result[0]);
        // Contract Instance
        var contract = new ethers.Contract(
            address,
            abi,
            signer
        );
        console.log('real contract:', contract);
        return contract;
    })
    .catch((error) => {
        console.log('error:', error.message);
        // setErrorMessage(error.message);
    });
}

// const justAnAlert = () => {
//     alert('hello');
// };

export {
    provider,
    contractClient
}

