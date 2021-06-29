import React from 'react';

function car() {
    return (
     
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
      
          <div class='cardMenu'>
            <div className="list-group">
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" checked="" autocomplete="off"></input>
                <label className="btn btn-primary" for="btncheck1">Hamburguesas</label>
                <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"></input>
                <label className="btn btn-primary" for="btncheck2">Acompañamiento</label>
                <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"></input>
                <label className="btn btn-primary" for="btncheck3">Para tomar</label>
              </div>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta comanda*/}
        <div className='col-md-4'>
          <div class='cardTicket'>
            <div className="list-group">
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" checked="" autocomplete="off"></input>
                <label className="btn btn-primary" for="btncheck1">Hamburguesas</label>
                <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"></input>
                <label className="btn btn-primary" for="btncheck2">Acompañamiento</label>
                <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"></input>
                <label className="btn btn-primary" for="btncheck3">Para tomar</label>
              </div>
              <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">List group item heading</h5>
                  <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default card
