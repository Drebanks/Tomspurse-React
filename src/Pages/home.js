
import Banner from "../components/Banner/banner";
import Guide from "../components/Guide/guide";
import Key from "../components/Key/key";
import Zero from "../components/Zero/zero";
import Simple from "../components/Simple/simple";
import Invest from "../components/Invest/invest";
import See from "../components/See/see";
import Footer from "../components/Footer/footer";

 
const Home = () =>{
  return (
    <main style={{ marginTop: "30px" }}>
      <Banner />
      <Guide />
      <Key />
      <Zero />
      <Simple />
      <Invest/>
      <See />
      <Footer />
    </main>
  );
};

export default Home;
