import TradingChart from "./components/TradingChart";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col justify-between items-center">
      <Header />
      <TradingChart />
      <Footer />
    </div>
  );
}

export default App;
