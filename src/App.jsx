import { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';
import { TaskList } from './components/TaskList/TaskList.jsx';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleValue = (value) => {
    setSearchValue(value);
  }

  return (
    <div>
    <Toaster/>
    <SearchBar task={handleValue}/>
    <TaskList task={searchValue}/>
    </div>
  )
}

export default App;
