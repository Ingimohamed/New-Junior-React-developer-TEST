  import "../styles/App.scss";
  import Navbar from "./navbar/Navbar";
  import { Switch, Route } from "react-router-dom";
  import Tech from "./categories/Tech";
  import Clothes from "./categories/Clothes";
  import PdpPage from "./PDP/PdpPage";
  import { BrowserRouter } from "react-router-dom";

  // 1
  import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client";

  // 2
  const httpLink = createHttpLink({
    uri: "http://localhost:4000",
  });

  // 3
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  function App() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div>
            <Navbar />
            <div>
              <Switch>
                <Route exact path="/" component={Tech} />
                <Route exact path="/clothes" component={Clothes} />
                <Route exact path="/pdp" component={PdpPage} />
              </Switch>
            </div>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }

  export default App;
