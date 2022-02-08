import { getContractAddress } from "ethers/lib/utils";
import {
  lazy,
  useLayoutEffect,
  useEffect,
  useState
} from "react";
import { Routes, Route } from "react-router-dom";
import { contractClient } from "../handlers/Wallet";

var address = process.env.REACT_APP_CONTRACT_ADDRESS;

// views
const Home = lazy(() => import("../views/Home"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const Start = lazy(() => import("../views/Start"));
const NotFoundPage = lazy(() => import("../views/NotFoundPage"));
const NFTDetail = lazy(() => import("../views/NFTDetail"));

function AppRoutes() {
  var [contract, setContract] = useState(null);

  async function getContract() {
    let contract = await contractClient(address)
    console.log('contract ar:', contract);
    setContract(contract);
  }

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    getContract();
  }, [contract]);

  console.log('contract o:', contract);
  return (
    <Routes>
      <Route path="/" element={<Home contract={contract} />} exact />
      <Route path="/nft/:tokenId" element={<NFTDetail />} exact />
      <Route path="/dashboard" element={<Dashboard />} exact />
      <Route path="/start" element={<Start />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
