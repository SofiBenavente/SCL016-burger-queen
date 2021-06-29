import React from 'react';
import List from './List.jsx';
import Food from './Food.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


const card = () => {



    return (
     
    <Router>
    <div className='container mt-5'>
      <div className='row'>

      {/* TARJETA MENU */}
        <div className='col-md-8'>
          <div class='cardMenu'>
            <div className="list-group">
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
               
                  <Link to='/' className="btn btn-lg btn-primary bloc" type="button">
                  Hamburguesas
                  </Link>   
               
                  <Link to='/Acompañamiento' className="btn btn-lg btn-primary bloc" type="button">
                  Acompañamiento
                  </Link>
                  
                  <Link to='/Bebidas'className="btn btn-lg btn-primary bloc" type="button">
                  Bebidas
                  </Link>

              </div>
              <a class="list-group-item list-group-item-action flex-column align-items-start">
                <fieldset class="form-group">
                <div class="btn-group-vertical">
                  <Switch>
                    <Route path='/' exact>
                      <Food/>
                      <List/>
                    </Route>
                    <Route path='/Acompañamiento'>
                      <h1>papitas y cositas pa picar</h1>
                    </Route>
                    <Route path='/Bebidas'>
                      <h1>bebiditas</h1>
                    </Route>
                  </Switch>

                  </div>
                </fieldset>
              </a>
            </div>
          </div>
        </div>
        
        {/* TARJETA COMANDA */}
        <div className='col-md-4'>
          <div class='cardTicket'>
            <div className="list-group">
            <div class="card text-white bg-primary">
              <div class="card-header">Orden</div>
              </div>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </a>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Nombre cliente" id="inputDefault" />
                <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
                <label className="btn btn-primary" for="btncheck3">Enviar</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Router>  
    )
}

export default card
