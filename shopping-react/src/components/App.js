import '../styles/App.scss';
import Navbar from './navbar/Navbar';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Switch, Route } from 'react-router-dom';
import Tech from './categories/Tech';
import Clothes from './categories/Clothes';
import CartPage from './Cart/CartPage';
import PdpPage from './PDP/PdpPage';


//const store = store();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/clothes" component={Clothes} />
            <Route exact path="/cartpage" component={CartPage} />
            <Route exact path="/pdp" component={PdpPage} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
