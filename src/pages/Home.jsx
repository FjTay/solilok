import Vehicule from "../components/Home/Vehicule";
import Borne from "../components/Home/Borne";
import Navbar from "../components/Layout/Navbar";

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Vehicule />
        <Borne />
    </div>
  )
}

export default Home;