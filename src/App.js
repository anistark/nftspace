import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import AppRoutes from './routes/routes';
import "./App.css";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
      <header className="bg-white light:bg-gray-800">
        <Nav />
        <AppRoutes />
      </header>
      <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
