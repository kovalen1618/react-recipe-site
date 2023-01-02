import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

function App() { 
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Switch></Switch> is used to define a collection of routes for an application. This means that the App will only
            render the <Route></Route> whos path matches the URL. <Switch></Switch> does this by looping through all the routes
            within it and only rendering the first one that matches the current URL. */}
        <Switch>
          {/* We use the exact attribute here so that no other pages that also include "/" will render. Without exact, paths
              such as "/search" and "/create" will render as they include "/" as well. */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
              <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* We add a dynamic route parameter so that we can specify recipes within our database that we wish to access. */}
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;