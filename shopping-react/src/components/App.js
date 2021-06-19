import '../styles/App.scss';
import Navbar from './navbar/Navbar';
import configureStore from '../store/configureStore';
import ClothesItems from './items/ClothesItems';
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
