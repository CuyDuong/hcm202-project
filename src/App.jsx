import Body from "./components/Body";
import BoxChat from "./components/BoxChat";
import Carousel from "./components/Carousel";
import CompareSlider from "./components/CompareSlider";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Features />
      <BoxChat />
      <CompareSlider />
      <Footer />
    </div>
  );
}

export default App;
