import MainHeader from "../components/MainHeader";
import Chat from "../components/Chat";
import About from "../components/About";
import Hackathon from "../components/Hackathon";
import Footer from "../components/Footer";

function MainPage() {
    return (
      <div>
        <MainHeader />
        <Chat />
        <Hackathon />
        <About />
        <Footer />
    </div>
    );
  }
  
export default MainPage;