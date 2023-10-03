import Footer from "./footer/Footer";
import Jobs from "./jobs/Jobs";
import Navbar from "./navbar/Navbar";
import SearchBar from "./serachbar/Searchbar";
import Value from "./value/Value";

function App() {
  return (
    <div className="text-text w-[85%] m-auto  ">
      <Navbar />
      <SearchBar />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
