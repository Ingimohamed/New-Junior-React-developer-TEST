import '../styles/App.scss';
import Navbar from './navbar/Navbar';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Currencies from './items/Currencies';
import ItemsList from './items/ItemsList';
import Products from './items/Products';



const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Currencies />
        <ItemsList />
        <Products />
        <div>
          <Switch>
           
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
