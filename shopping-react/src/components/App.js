import '../styles/App.scss';
import Navbar from './navbar/Navbar';
import configureStore from '../store/configureStore';
import ClothesItems from './items/ClothesItems';
import { Provider } from 'react-redux';


import { Switch, Route } from 'react-router-dom';


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/items" component={ClothesItems} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
