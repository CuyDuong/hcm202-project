import Body from "./components/Body";
import BoxChat from "./components/BoxChat";
import Carousel from "./components/Carousel";
import CompareSlider from "./components/CompareSlider";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import logo from "./logo.svg";
import HistoricalFigures from "./components/PartyComparison";
import CompareVideo from "./components/CompareVideo";
import ContinuousBanner from "./components/Continousbanner";
import ContinuousBannerVideo from "./components/ContinuousBannerVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTopButton />
      <Body />
      <Features />
      <HistoricalFigures />
      <BoxChat />
      <ContinuousBanner />
      <CompareVideo />
      <CompareSlider />
      <ContinuousBannerVideo />
      <Footer />
    </div>
  );
}

export default App;
