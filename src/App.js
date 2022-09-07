import '../src/styles/App.scss';
import Header from '../src/components/Header/Header';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
    </div>
  );
}

export default App;
