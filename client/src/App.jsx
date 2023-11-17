import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Page404 from './pages/Page404';
import SignUp from './pages/Signup';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import ItemList from './components/ItemList/ItemList';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Header isLogin={isLogin} />
      <Switch>
        <Route path="/" exact>
          <ItemList />
        </Route>
        {isLogin ? (
          <Route path="/profile">
            <Profile isLogin={isLogin} setIsLogin={setIsLogin} />
          </Route>
        ) : (
          <Route path="/signup">
            <SignUp setIsLogin={setIsLogin} />
          </Route>
        )}

        <Route path="/*">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
