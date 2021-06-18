import './App.scss';
import Navbar from './components/Navbar';
import configureStore from './store/configureStore';
import ClothesItems from './components/ClothesItems';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ClothesItems />
    </Provider>
   
  );
}

export default App;
