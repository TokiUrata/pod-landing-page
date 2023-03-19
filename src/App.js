import MainHeader from './components/MainHeader';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <MainHeader />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
