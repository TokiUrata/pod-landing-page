import MainHeader from './components/MainHeader';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <MainHeader />
      <main>
        <Hero />
      </main>

      <button>Request access</button>
    </div>
  );
}

export default App;
