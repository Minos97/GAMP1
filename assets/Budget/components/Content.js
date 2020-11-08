import React from "react";
import {HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { LivreAdd, LivreList } from "../pages/Livre";
import { Compte, CompteList } from "../pages/Compte";
import { CategorieAdd, CategorieList } from "../pages/Categorie";
import ErrorPage from "../pages/ErrorPage";
import Modal from "../pages/forms/Modal";


class Content extends React.Component {
  render() {
    return (
      <HashRouter>
      <main>
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="main-body">
            
              <div id="styleSelector"></div>
            
                <Switch>
                  <Route path="/livre" component={LivreAdd} />
                  <Route path="/livres/liste" component={LivreList} />
                  <Route path="/choix" component={Modal} />
                  <Route path='/compte' component={Compte} />
                  <Route path='/comptes/liste' component={CompteList} />
                  <Route path='/categorie' component={CategorieAdd} />
                  <Route path='/categories/liste' component={CategorieList} />
                  <Route exact path="/" component={Home} />
                  <Route component={ErrorPage} />
                </Switch>             
            </div>
        </div>
      </div>
      </main>
      </HashRouter>
    );
  }
}
export default Content;
