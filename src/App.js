import '../src/styles/App.scss';
import Header from '../src/components/Header/Header';
import Filters from './components/Filters/Filters';
import JobList from './components/JobList/JobList';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <JobList />
    </div>
  );
}

export default App;
