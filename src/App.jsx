import Body from "./components/Body";
import BoxChat from "./components/BoxChat";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./logo.svg";
import HistoricalFigures from "./components/PartyComparison";


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Features />
      <HistoricalFigures/>
      <BoxChat />
      <Footer />
    </div>
  );
}

export default App;
