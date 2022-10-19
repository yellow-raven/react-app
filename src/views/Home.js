import './Home.css'
import Header from '../components/header/Header.js'
import FunFacts from '../components/FunFacts.js'
import Reasons from '../components/Reasons.js'
import Footer from '../components/Footer.js'

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div class="content">
        <FunFacts />
        <Reasons />
      </div>
      <Footer />
    </div>
  )
}

export default Home;