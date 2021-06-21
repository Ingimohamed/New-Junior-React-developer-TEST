import '../styles/App.scss';
import Navbar from './navbar/Navbar';
import configureStore from '../store/configureStore';
import ClothesItems from './items/ClothesItems';
import { Provider } from 'react-redux';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="center w85">
        <Navbar />
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/items" component={ClothesItems} />
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default App;
