const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

    let a = 1;

    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
      }
    });
    


    var imgmain = document.getElementById("izquierda");
    var cambiarimg = 1;
    var extra = document.getElementById("extraizq");

function IzqIcon() {
    cambiarimg = cambiarimg + 1;
    
    if (cambiarimg % 2 != 0) {
      imgmain.setAttribute("src", "../IMG/izq_vac.png");
      extra.style.display = "none"
      console.log(cambiarimg);
    }else{
      imgmain.setAttribute("src", "../IMG/izq_rell.png");
      extra.style.display = "block"
      console.log(cambiarimg);
      
    }
}


function DerIcon() {
  let imgmain = document.getElementById("derecha");
  let cambiar = 1;
  let extra = document.getElementById("extrader");
  cambiar = cambiar + 1;
  if (cambiar % 2 != 0) {
    imgmain.setAttribute("src", "../IMG/der_vac.png");
    extra.style.display = "none"
    console.log(cambiar);
  }else{
    imgmain.setAttribute("src", "../IMG/der_rell.png");
    extra.style.display = "block"
    console.log(cambiar);
    
  }
  
}



function mostrarPizzas() {
  let seleccion = document.getElementById("contenido");

  seleccion.innerHTML = `
        <div class="m-3">
    <ul class="nav nav-tabs d-flex justify-content-center m-3 " id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="promociones-tab" data-bs-toggle="tab" data-bs-target="#promociones"
          type="button" role="tab" aria-controls="promociones" aria-selected="true">Promociones</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pizzas-tab" data-bs-toggle="tab" data-bs-target="#pizzas" type="button" role="tab"
          aria-controls="pizzas" aria-selected="false">Pizzas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pastas-tab" data-bs-toggle="tab" data-bs-target="#pastas" type="button" role="tab"
          aria-controls="pastas" aria-selected="false">Pastas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="adicionales-tab" data-bs-toggle="tab" data-bs-target="#adicionales" type="button"
          role="tab" aria-controls="adicionales" aria-selected="false">Adicionales</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade " id="promociones" role="tabpanel" aria-labelledby="promociones-tab">
        <div class="container">
          <div class="d-flex flex-row flex-wrap">

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_1.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">Kee Duo</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $159</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_2.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_3.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_4.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>


      </div>
    </div>
      </div>
      <div class="tab-pane fade show active" id="pizzas" role="tabpanel" aria-labelledby="pizzas-tab">
        <div class="container">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Crea tu pizza.
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div>
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card m-2 text-center" style="width: 18rem;">
                          <img src="../IMG/arm-tu-pizza-mitad-y-mitad.png" class="card-img-top img-fluid" >
                          <div class="card-body">
                            <h5 class="card-title">Arma tu pizza mitad y mitad</h5>
                            <p class="card-text">¿Más de un antojo?, dos sabores en una sola vida, perfecta cuando lo
                              tienes todo.</p>
                            <!--Boton modal -->
                            <div>
                            <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                              class="btn menu fw-bold">Vamos!</a>
                              </div>
                          </div>
                        </div>
                      </div>

                      
                      <div>
                        <div class="card m-2 text-center" style="width: 18rem;">
                          <img src="../IMG/ARMA-TU-PIZZA.jpg" class="card-img-top img-fluid" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Crea tu pizza</h5>
                            <p class="card-text">La felicidad es... crear tu propia pizza
                              Elgie el tamaño, la masa, añade tus ingredientes favoritos y nosotros te la preparamos.
                            </p>
                            <a href="#" class="btn menu fw-bold">Vamos!</a>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Especialidades.
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Pizzas de carne.
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  5 ingredientes.
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                  4 ingredientes.
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  3 ingredientes.
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pastas" role="tabpanel" aria-labelledby="pastas-tab">Pastas</div>
      <div class="tab-pane fade" id="adicionales" role="tabpanel" aria-labelledby="adicionales-tab">
      <div class="container m-3 ">
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Entradas</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Bebidas</button>
          <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Salsas</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
      </div>

        
  <!-- Menú -->

        `;
}



function mostrarProm() {
  let seleccion = document.getElementById("contenido");
  seleccion.innerHTML = `
    <div>
    <ul class="nav nav-tabs d-flex justify-content-center m-3 " id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="promociones-tab" data-bs-toggle="tab" data-bs-target="#promociones"
          type="button" role="tab" aria-controls="promociones" aria-selected="true">Promociones</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pizzas-tab" data-bs-toggle="tab" data-bs-target="#pizzas" type="button" role="tab"
          aria-controls="pizzas" aria-selected="false">Pizzas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pastas-tab" data-bs-toggle="tab" data-bs-target="#pastas" type="button" role="tab"
          aria-controls="pastas" aria-selected="false">Pastas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="adicionales-tab" data-bs-toggle="tab" data-bs-target="#adicionales" type="button"
          role="tab" aria-controls="adicionales" aria-selected="false">Adicionales</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="promociones" role="tabpanel" aria-labelledby="promociones-tab">
        <div class="container">
          <div class="d-flex flex-row flex-wrap">

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_1.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">Kee Duo</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $159</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_2.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_3.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_4.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>


      </div>
    </div>
      </div>
      <div class="tab-pane fade" id="pizzas" role="tabpanel" aria-labelledby="pizzas-tab">
        <div class="container">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Crea tu pizza.
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div>
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card m-2 text-center" style="width: 18rem;">
                          <img src="../IMG/arm-tu-pizza-mitad-y-mitad.png" class="card-img-top img-fluid" >
                          <div class="card-body">
                            <h5 class="card-title ">Arma tu pizza mitad y mitad</h5>
                            <p class="card-text">¿Más de un antojo?, dos sabores en una sola vida, perfecta cuando lo
                              tienes todo.</p>
                            <!--Boton modal -->
                            <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                              class="btn menu">Vamos!</a>
                          </div>
                        </div>
                      </div>

                      <!-- Modal -->
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div>
                        <div class="card m-2 text-center" style="width: 18rem;">
                          <img src="../IMG/ARMA-TU-PIZZA.jpg" class="card-img-top img-fluid" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Crea tu pizza</h5>
                            <p class="card-text">La felicidad es... crear tu propia pizza
                              Elgie el tamaño, la masa, añade tus ingredientes favoritos y nosotros te la preparamos.
                            </p>
                            <a href="#" class="btn menu">Vamos!</a>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Especialidades.
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Pizzas de carne.
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  5 ingredientes.
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                  4 ingredientes.
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  3 ingredientes.
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pastas" role="tabpanel" aria-labelledby="pastas-tab">Pastas</div>
      <div class="tab-pane fade" id="adicionales" role="tabpanel" aria-labelledby="adicionales-tab">

      <div class="container m-3 ">
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Entradas</button>
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Bebidas</button>
            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Salsas</button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
</div>
    `;
}

function mostrarAdic() {
  let seleccion = document.getElementById("contenido");
  seleccion.innerHTML = `
        <div>
    <ul class="nav nav-tabs d-flex justify-content-center m-3 " id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="promociones-tab" data-bs-toggle="tab" data-bs-target="#promociones"
          type="button" role="tab" aria-controls="promociones" aria-selected="true">Promociones</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="pizzas-tab" data-bs-toggle="tab" data-bs-target="#pizzas" type="button" role="tab"
          aria-controls="pizzas" aria-selected="false">Pizzas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pastas-tab" data-bs-toggle="tab" data-bs-target="#pastas" type="button" role="tab"
          aria-controls="pastas" aria-selected="false">Pastas</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="adicionales-tab" data-bs-toggle="tab" data-bs-target="#adicionales" type="button"
          role="tab" aria-controls="adicionales" aria-selected="false">Adicionales</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade " id="promociones" role="tabpanel" aria-labelledby="promociones-tab">
        <div class="container">
          <div class="d-flex flex-row flex-wrap">

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_1.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">Kee Duo</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $159</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_2.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_3.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>

          <div class="card text-center m-2">
            <div class="card-header">

            </div>
            <img src="../IMG/Promo_4.jpg" class="card-img-top img-fluid" alt="50">
            <div class="card-body">
              <h5 class="card-title">...</h5>
              <p class="card-text">Una pizza de pepperoni mediana y una pizza hawaiana mediana.</p>
              <a href="#" class="btn" id="btnamarillo">Agregar por solo $145</a>
            </div>
            <div class="card-footer text-muted">
            </div>
          </div>


      </div>
    </div>
      </div>
      <div class="tab-pane fade " id="pizzas" role="tabpanel" aria-labelledby="pizzas-tab">
        <div class="container">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Crea tu pizza.
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div>
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card m-2 text-center" style="width: 18rem;">
                          <img src="../IMG/arm-tu-pizza-mitad-y-mitad.png" class="card-img-top img-fluid" >
                          <div class="card-body">
                            <h5 class="card-title">Arma tu pizza mitad y mitad</h5>
                            <p class="card-text">¿Más de un antojo?, dos sabores en una sola vida, perfecta cuando lo
                              tienes todo.</p>
                            <!--Boton modal -->
                            <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                              class="btn menu">Vamos!</a>
                          </div>
                        </div>
                      </div>

                      <!-- Modal -->
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              ...
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div>
                        <div class="card m-2 text-center" style="width: 18rem;">
                          <img src="../IMG/ARMA-TU-PIZZA.jpg" class="card-img-top img-fluid" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Crea tu pizza</h5>
                            <p class="card-text">La felicidad es... crear tu propia pizza
                              Elgie el tamaño, la masa, añade tus ingredientes favoritos y nosotros te la preparamos.
                            </p>
                            <a href="#" class="btn menu">Vamos!</a>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Especialidades.
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Pizzas de carne.
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  5 ingredientes.
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                  4 ingredientes.
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  3 ingredientes.
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="">
                    <div class="d-flex flex-row flex-wrap">
                      <div>
                        <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                        <div class="card text-center m-3" style="width: 18rem;">
                          <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pepperoni especial</h5>
                            <p class="card-text">Totalmente cubierta de peperoni.</p>
                            <strong> Precio:</strong> <label>$</label>
                            <div>
                              <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample1"
                                role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                              <a class="btn btn-success m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                  class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                  <path
                                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                </svg>
                              </a>
                            </div>
                            <div class="collapse" id="collapseExample1">
                              <div class="card card-body">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>Selecciona el tamaño.</option>
                                      <option value="1">Chica</option>
                                      <option value="2">Mediana</option>
                                      <option value="3">Grande</option>
                                      <option value="3">Familiar</option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Agrega extras a tu pizza.</strong>
                                    <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                      <option selected>
                                        Elige orilla o queso extra.
                                      </option>
                                      <option value="1">
                                        Orilla de tres quesos.
                                      </option>
                                      <option value="2">
                                        Orilla de queso mozzarella.
                                      </option>
                                      <option value="3">
                                        Orilla de queso philadelphia.
                                      </option>
                                      <option value="3">
                                        Orilla de queso gouda.
                                      </option>
                                      <option value="3">
                                        Porción extra 3 quesos.
                                      </option>
                                      <option value="3">
                                        Porción extra queso mozzarella
                                      </option>
                                      <option value="3">
                                        Porción extra queso gouda.
                                      </option>
                                    </select>
                                  </li>
                                  <li class="list-group-item">
                                    <strong>Selecciona tu tipo de masa.</strong>
                                    <div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                          Masa americana.
                                        </label>
                                      </div>
                                      <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                          id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                          Masa Romana.
                                        </label>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="list-group-item">
                                    <!---- <input
                              class="m-3"
                              type="number"
                              min="0"
                              step="1"
                              value="0"
                              size="45px"
                              style="width: 45px"
                            /> --->
                                  </li>
                                </ul>
                                <a href="#" class="btn btn-success">Agregar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample2"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample2">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample3"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample3">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card text-center m-3 d-flex flex-wrap" style="width: 18rem;">
                            <img src="../IMG/card 1.jpg" class="card-img-top img-fluid rounded" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">Pepperoni especial</h5>
                              <p class="card-text">Totalmente cubierta de peperoni.</p>
                              <strong> Precio:</strong> <label>$</label>
                              <div>
                                <a class="btn btn-success m-2" data-bs-toggle="collapse" href="#collapseExample4"
                                  role="button" aria-expanded="false" aria-controls="collapseExample">Modificar </a>
                                <a class="btn btn-success m-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                    class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                    <path
                                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                                  </svg>
                                </a>
                              </div>
                              <div class="collapse" id="collapseExample4">
                                <div class="card card-body">
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>Selecciona el tamaño.</option>
                                        <option value="1">Chica</option>
                                        <option value="2">Mediana</option>
                                        <option value="3">Grande</option>
                                        <option value="3">Familiar</option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Agrega extras a tu pizza.</strong>
                                      <select class="form-select form-select-sm m-2" aria-label=".form-select-sm example">
                                        <option selected>
                                          Elige orilla o queso extra.
                                        </option>
                                        <option value="1">
                                          Orilla de tres quesos.
                                        </option>
                                        <option value="2">
                                          Orilla de queso mozzarella.
                                        </option>
                                        <option value="3">
                                          Orilla de queso philadelphia.
                                        </option>
                                        <option value="3">
                                          Orilla de queso gouda.
                                        </option>
                                        <option value="3">
                                          Porción extra 3 quesos.
                                        </option>
                                        <option value="3">
                                          Porción extra queso mozzarella
                                        </option>
                                        <option value="3">
                                          Porción extra queso gouda.
                                        </option>
                                      </select>
                                    </li>
                                    <li class="list-group-item">
                                      <strong>Selecciona tu tipo de masa.</strong>
                                      <div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            Masa americana.
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                          <label class="form-check-label" for="flexRadioDefault2">
                                            Masa Romana.
                                          </label>
                                        </div>
                                      </div>
                                    </li>
                                    <li class="list-group-item">
                                      <!---- <input
                                class="m-3"
                                type="number"
                                min="0"
                                step="1"
                                value="0"
                                size="45px"
                                style="width: 45px"
                              /> --->
                                    </li>
                                  </ul>
                                  <a href="#" class="btn btn-success">Agregar</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="pastas" role="tabpanel" aria-labelledby="pastas-tab">Pastas</div>
      <div class="tab-pane fade show active" id="adicionales" role="tabpanel" aria-labelledby="adicionales-tab">
      
      <div class="container m-3 ">
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Entradas</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Bebidas</button>
          <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Salsas</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
  <!-- Menú -->
   
        `;
}

function continuarCompra() {
  let seleccion = document.getElementById("contenido");
  seleccion.innerHTML = `
  <div  class="container"> 
  <div id="finalizarcompra" class="m-5">
  <div class=""> 
<h1 class="d-flex justify-content-center">Resumen de compra</h1>
  </div>
  <hr class="border border-secondary">
  <div class=""> 
<h3 class="d-flex justify-content-center">Datos de entrega </h3>

<div class="d-flex flex-column">
<p class="fs-5">Nombre:</p> 
<p class="fs-5">Dirección:</p>
<p class="fs-5">Referencias:</p>
<p class="fs-5">Teléfono:</p>
</div>
<div class="d-flex justify-content-center">
<button type="button" class="btn btn-danger btn-sm fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Cambiar dirección de entrega </button>
</div>

<!-- Modal -->
          <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body " >

                  <div class="card-header py-3 text-center">
                    <h5 class="mb-0">COMPLETA Y CONFIRMA TUS DATOS DE ENTREGA</h5>
                  </div>
                  <div>
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example1" class="form-control" />
                          <label class="form-label" for="form7Example1">Nombre(s)</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example2" class="form-control" />
                          <label class="form-label" for="form7Example2">Apellidos</label>
                        </div>
                      </div>
                    </div>
                    <!-- Text input -->
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example1" class="form-control" />
                          <label class="form-label" for="form7Example1">Calle</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example2" class="form-control" />
                          <label class="form-label" for="form7Example2">Número exterior</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example2" class="form-control" />
                          <label class="form-label" for="form7Example2">Número interior</label>
                        </div>
                      </div>
                    </div>

                    <!-- Text input -->
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example1" class="form-control" />
                          <label class="form-label" for="form7Example1">Código postal</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Colonia</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <label class="form-label" for="form7Example2">Colonia</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example2" class="form-control" />
                          <label class="form-label" for="form7Example2">Referencias y/o entre calles</label>
                        </div>
                      </div>
                    </div>
                    <!-- Text input -->
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example1" class="form-control" />
                          <label class="form-label" for="form7Example1">Ciudad</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example2" class="form-control" />
                          <label class="form-label" for="form7Example2">Municipio</label>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example2" class="form-control" />
                          <label class="form-label" for="form7Example2">Estado</label>
                        </div>
                      </div>
                    </div>
                    <!-- Text input -->
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">
                          <input type="text" id="form7Example1" class="form-control" />
                          <label class="form-label" for="form7Example1">Teléfono</label>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
  </div>
  <hr class="border border-secondary">
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label fs-5" for="flexCheckDefault">
    Sí, me gustaría recibir ofertas
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label fs-5" for="flexCheckDefault">
    Sí, he leído y esoy de acuerdo con los Términos y Condiciones y el Aviso de privacidad
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label fs-5" for="flexCheckDefault">
    Sí, soy mayor de 13 años
  </label>
</div>
<div class=""> 
<h3 class="d-flex justify-content-center">Tu orden</h3>
<table class="table table-secondary fs-5">
<thead>
    <tr>
      <th scope="col">Producto(s)</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
  <tr class="table-light">
  <th scope="row">1</th>
    <td class="table-light">Mark</td>
  </tr>
  <tr class="table-light">
  <th scope="row">1</th>
    <td class="table-light">Mark</td>
  </tr>
  </tbody>
</table>
<div class="d-flex justify-content-end">
<div class="d-flex flex-column "> 
<label class="form-check-label fs-6 fw-bold" for="flexCheckDefault"> Precio normal:</label>
<label class="form-check-label fs-6 fw-bold" for="flexCheckDefault"> Descuento:</label>
<label class="form-check-label fs-6 fw-bold" for="flexCheckDefault"> Costo de envío:</label>
<label class="form-check-label fs-6 fw-bold" for="flexCheckDefault"> Total a pagar:</label>
</div>
</div>
</div>
<hr class="border border-secondary">
<div> 
<h3 class="d-flex justify-content-center">Seleccionar método de pago</h3>
<div> 
<h5 class="d-flex justify-content-center">Pago contra entrega</h5>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label fs-5" for="flexRadioDefault1">
  Efectivo,
  Nuestros repartidores no llevan más de $200 pesos de cambio.
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label fs-5" for="flexRadioDefault1">
  Pago con tarjeta,
  Nuestros repartidores llevarán la terminal bancaria.
  </label>
</div>
<div class="d-flex justify-content-center">
<button type="button" class="btn btn-danger btn-lg fw-bold">Ordenar </button>
</div>
</div>
</div>

  </div>
  </div>
  `;
}
