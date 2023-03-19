import MainHeader from './components/MainHeader';
import Hero from './components/Hero';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="app__overlay"></div>
      <div className="app__container">
        <MainHeader />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
