import './App.css';
import Header from './components/Header/Header';
import SocialCard from './components/SocialCard/SocialCard';
import Swipebutton from './components/SwipeButton/Swipebutton';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header/>
      {/* social Card */}
      <SocialCard/>
      {/* swipeButton */}
      <Swipebutton/>
    </div>
  );
}

export default App;
