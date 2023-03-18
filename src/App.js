import MainHeader from './components/MainHeader';
import './App.css';

function App() {
  return (
    <div className="app">
      <MainHeader />
      <h1>Publish your podcasts everywhere.</h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <button>Request access</button>
    </div>
  );
}

export default App;
