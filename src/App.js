import '../src/styles/App.scss';
import Header from '../src/components/Header/Header';
import Filters from './components/Filters/Filters';
import JobList from './components/JobList/JobList';

import { useSelector } from "react-redux";
import { selectAllFilters } from "./store/filters/filtersSelector";

function App() {

  const filters = useSelector((store) => selectAllFilters(store));

  return (
    <div className="App">
      <Header />
      {filters.length > 0 && <Filters />}
      <JobList />
    </div>
  );
}

export default App;
