// Objeto Usuario
function Usuario(nombres, contraseñas) {
    this.nombres = nombres;
    this.contraseñas = contraseñas;

    this.login = function(cFromRegister) {
        if (cFromRegister)
        {
            limpiarPag = document.getElementById("rAfter");
            limpiarPag.remove();
            pantallaLogin = document.createElement("div");
            pantallaLogin.innerHTML = 
            `
            <div id="rAfter">
                    <div class="hero_area">
                        <div class="hero_bg_box">
                            <div class="bg_img_box">
                            <img src="images/hero-bg.png" alt="">
                            </div>
                        </div>
                        <!-- header section strats -->
                        <header class="header_section">
                            <div class="container-fluid">
                            <nav class="navbar navbar-expand-lg custom_nav-container ">
                                <a class="navbar-brand" href="index.html">
                                <img id="logo" src="images/logo.png" alt="">
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class=""> </span>
                                </button>
                            </nav>
                            </div>
                        </header>
                        <!-- end header section -->
                        <div id="logintitle">
                            <h1>¡Bienvenido a Calcula2!</h1>
                        </div>
                        <!-- login -->
                        <div id="loginParent">
                            <div id="loginBox"> 
                            <form>
                            <!-- User input -->
                            <div class="form-outline mb-4">
                            <input type="text" id="form2Example1" class="form-control" placeholder="admin"/>
                            <label class="form-label" for="form2Example1">Nombre de Usuario</label>
                            </div>
                            
                            <!-- Password input -->
                            <div class="form-outline mb-4">
                            <input type="password" id="form2Example2" class="form-control" placeholder="1234"/>
                            <label class="form-label" for="form2Example2">Contraseña</label>
                            </div>
                            
                            <!-- Submit/register button -->
                            <button type="button" id="loginbtn" class="btn btn-primary btn-block mb-4">Ingresar</button>
                            <button type="button" id="registerbtn" class="btn btn-primary btn-block mb-4">Registrarse</button>
                        </form>
                        </div>
                    </div>
                <!-- jQery -->
                <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
                <!-- popper js -->
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
                </script>
                <!-- bootstrap js -->
                <script type="text/javascript" src="js/bootstrap.js"></script>
                <!-- owl slider -->
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
                </script>
                <!-- custom js -->
                <script type="text/javascript" src="js/custom.js"></script>
                <!-- JS entrega -->
                <script defer src="js/miarchivo.js"></script>
            </div>
            `
            document.body.appendChild(pantallaLogin)
        }
        let botonLogin = document.getElementById("loginbtn")
        let botonRegistro = document.getElementById("registerbtn")
        botonRegistro.onclick = () =>{
            this.register()
        }
        botonLogin.onclick = () =>{
            let inputUser = document.getElementById("form2Example1")
            let inputPass = document.getElementById("form2Example2");
    
            for (let j = 0; j < this.nombres.length; j++) {
                if (inputUser.value == this.nombres[j] && inputPass.value == this.contraseñas[j]) {
                    usuarioLog = inputUser.value
                    pantallaLogin = document.getElementById("rAfter");
                    pantallaLogin.remove();
                    let pantallaFinal = document.createElement ("div");
                    pantallaFinal.innerHTML = 
                    `
                    <div id="rAfter">
                        <div class="hero_area">
                            <div class="hero_bg_box">
                            <div class="bg_img_box">
                                <img src="images/hero-bg.png" alt="">
                            </div>
                            </div>
                            <!-- header section strats -->
                            <header class="header_section">
                            <div class="container-fluid">
                                <nav class="navbar navbar-expand-lg custom_nav-container ">
                                <a class="navbar-brand" href="index.html">
                                    <img id="logo" src="images/logo.png" alt="">
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class=""> </span>
                                </button>
                                </nav>
                            </div>
                            </header>
                                <!-- slider section -->
                        <section class="welcomeText"> 
                            <h2> ¡Bienvenido, ${usuarioLog}! </h2> 
                        </section>
                        <section class="slider_section ">
                            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container ">
                                    <div class="row">
                                        <div class="col-md-6 ">
                                        <div class="detail-box">
                                            <h1>
                                                Calculá <br>
                                                Precios de compras <br>
                                                Internacionales
                                            </h1>
                                            <div class="btn-box">
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="img-box">
                                            <img src="images/slider-img.png" alt="">
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="carousel-item ">
                                    <div class="container ">
                                    <div class="row">
                                        <div class="col-md-6 ">
                                        <div class="detail-box">
                                            <h1>
                                            Dolar Tarjeta <br>
                                            Actualizado
                                            </h1>
                                            <p>
                                        </div>
                                        </div>
                                        <div class="col-md-6">
                                        <div class="img-box">
                                            <img src="images/slider-img.png" alt="">
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                            <!-- end slider section -->
                        </div>
                        
                        
                        <!-- service section -->
                        
                        <section class="service_section layout_padding">
                            <div class="service_container">
                            <div class="container ">
                                <div class="heading_container heading_center">
                                <h2>
                                    Nuestro <span>Servicio</span>
                                </h2>
                                </div>
                                <div class="row">
                                <div class="col-md-4 ">
                                    <div class="box ">
                                    <div class="img-box">
                                        <img src="images/s1.png" alt="">
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                        Sabé los precios antes de comprar
                                        </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada enim ac nulla tincidunt scelerisque.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4 ">
                                    <div class="box ">
                                    <div class="img-box">
                                        <img src="images/s3.png" alt="">
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                        Mantenemos el dolar actualizado
                                        </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada enim ac nulla tincidunt scelerisque.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-4 ">
                                    <div class="box ">
                                    <div class="img-box">
                                        <img src="images/w1.png" alt="">
                                    </div>
                                    <div class="detail-box">
                                        <h5>
                                        Dejanos tu review
                                        </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada enim ac nulla tincidunt scelerisque.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
                        <!-- jQery -->
                        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
                        <!-- popper js -->
                        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
                        </script>
                        <!-- bootstrap js -->
                        <script type="text/javascript" src="js/bootstrap.js"></script>
                        <!-- owl slider -->
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
                        </script>
                        <!-- custom js -->
                        <script type="text/javascript" src="js/custom.js"></script>
                        <!-- JS entrega -->
                        <script defer src="js/miarchivo.js"></script>
                    </div>
                    `
                    document.body.appendChild(pantallaFinal)
                    return null;
                }
            }
        }
    };

    this.register = function() {
        limpiarPag = document.getElementById("rAfter")
        limpiarPag.remove()
        pantallaRegister = document.createElement("div")
        pantallaRegister.innerHTML = 
        `
        <div id="rAfter">
                <div class="hero_area">
                    <div class="hero_bg_box">
                        <div class="bg_img_box">
                        <img src="images/hero-bg.png" alt="">
                        </div>
                    </div>
                    <!-- header section strats -->
                    <header class="header_section">
                        <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                            <img id="logo" src="images/logo.png" alt="">
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                            </button>
                        </nav>
                        </div>
                    </header>
                    <!-- end header section -->
                    <div id="logintitle">
                        <h1>¡Creá tu cuenta ahora!</h1>
                    </div>
                    <!-- login -->
                    <div id="loginParent">
                        <div id="loginBox"> 
                        <form>
                        <!-- User input -->
                        <div class="form-outline mb-4">
                        <input type="text" id="form2Example1" class="form-control" placeholder="JohnDoe"/>
                        <label class="form-label" for="form2Example1">Nombre de Usuario</label>
                        </div>
                        
                        <!-- Password input -->
                        <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder="Password"/>
                        <label class="form-label" for="form2Example2">Contraseña</label>
                        </div>

                        <div class="form-outline mb-4">
                        <input type="password" id="form2Example3" class="form-control" placeholder="Password"/>
                        <label class="form-label" for="form2Example3">Confirmación de contraseña</label>
                        </div>
                        
                        <!-- Submit/register button -->
                        <button type="button" id="registerbtn" class="btn btn-primary btn-block mb-4">Registrarse</button>
                        <button type="button" id="loginbtn" class="btn btn-primary btn-block mb-4">¿Ya tenés una cuenta? Iniciá Sesión</button>
                    </form>
                    </div>
                </div>
            <!-- jQery -->
            <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
            <!-- popper js -->
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
            </script>
            <!-- bootstrap js -->
            <script type="text/javascript" src="js/bootstrap.js"></script>
            <!-- owl slider -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
            </script>
            <!-- custom js -->
            <script type="text/javascript" src="js/custom.js"></script>
            <!-- JS entrega -->
            <script defer src="js/miarchivo.js"></script>
        </div>
        `
        document.body.appendChild(pantallaRegister)
        console.table(this.contraseñas);
        console.table(this.nombres);
        botonRegistro = document.getElementById("registerbtn");
        botonLogin = document.getElementById("loginbtn")
        botonLogin.onclick = () =>{
            this.login(true)
        }
        botonRegistro.onclick = () =>{
            let inputUser = document.getElementById("form2Example1")
            let inputPass = document.getElementById("form2Example2");
            let inputPassC = document.getElementById("form2Example3");
            let nUsuario = inputUser.value;
            let nContra = inputPass.value;
            if(nContra == inputPassC.value && !this.nombres.includes(nUsuario) && nUsuario != ""){
                this.nombres.push(nUsuario);
                this.contraseñas.push(nContra);
                console.table(this.contraseñas);
                console.table(this.nombres);
                pantallaLogin = document.getElementById("rAfter");
                pantallaLogin.remove();
                let pantallaFinal = document.createElement ("div");
                pantallaFinal.innerHTML = 
                `
                <div id="rAfter">
                    <div class="hero_area">
                        <div class="hero_bg_box">
                        <div class="bg_img_box">
                            <img src="images/hero-bg.png" alt="">
                        </div>
                        </div>
                        <!-- header section strats -->
                        <header class="header_section">
                        <div class="container-fluid">
                            <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                                <img id="logo" src="images/logo.png" alt="">
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class=""> </span>
                            </button>
                            </nav>
                        </div>
                        </header>
                            <!-- slider section -->
                    <section class="welcomeText"> 
                        <h2> ¡Bienvenido, ${nUsuario}! </h2> 
                    </section>
                    <section class="slider_section ">
                        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="container ">
                                <div class="row">
                                    <div class="col-md-6 ">
                                    <div class="detail-box">
                                        <h1>
                                            Calculá <br>
                                            Precios de compras <br>
                                            Internacionales
                                        </h1>
                                        <div class="btn-box">
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="img-box">
                                        <img src="images/slider-img.png" alt="">
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div class="container ">
                                <div class="row">
                                    <div class="col-md-6 ">
                                    <div class="detail-box">
                                        <h1>
                                        Dolar Tarjeta <br>
                                        Actualizado
                                        </h1>
                                        <p>
                                    </div>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="img-box">
                                        <img src="images/slider-img.png" alt="">
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
                        <!-- end slider section -->
                    </div>
                    
                    
                    <!-- service section -->
                    
                    <section class="service_section layout_padding">
                        <div class="service_container">
                        <div class="container ">
                            <div class="heading_container heading_center">
                            <h2>
                                Nuestro <span>Servicio</span>
                            </h2>
                            </div>
                            <div class="row">
                            <div class="col-md-4 ">
                                <div class="box ">
                                <div class="img-box">
                                    <img src="images/s1.png" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                    Sabé los precios antes de comprar
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada enim ac nulla tincidunt scelerisque.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-4 ">
                                <div class="box ">
                                <div class="img-box">
                                    <img src="images/s3.png" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                    Mantenemos el dolar actualizado
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada enim ac nulla tincidunt scelerisque.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-4 ">
                                <div class="box ">
                                <div class="img-box">
                                    <img src="images/w1.png" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                    Dejanos tu review
                                    </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada enim ac nulla tincidunt scelerisque.
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <!-- jQery -->
                    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
                    <!-- popper js -->
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
                    </script>
                    <!-- bootstrap js -->
                    <script type="text/javascript" src="js/bootstrap.js"></script>
                    <!-- owl slider -->
                    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
                    </script>
                    <!-- custom js -->
                    <script type="text/javascript" src="js/custom.js"></script>
                    <!-- JS entrega -->
                    <script defer src="js/miarchivo.js"></script>
                </div>
                `
                document.body.appendChild(pantallaFinal)
                return null;
            }
        }
    }
}

// Funciones

function llamarLogin(){
    let cFromRegister = false
    usuarios.login(cFromRegister)
}

function llamarRegistro(){
    usuarios.register()
}

function calculo(){
    let dolarTHoy = 1386.45
    while (true){
        let valorProducto = prompt("Ingrese el valor en dólares del producto a comprar: ")
        valorProducto = parseFloat(valorProducto)
        if(Number.isNaN(valorProducto)){
            alert("Error, ingreso un dato incorrecto. Por favor intente nuevamente")
        }
        else{
            alert("El valor de su producto en pesos es: " + (dolarTHoy*valorProducto))
            break;
        }
    }
}

let usuarios = new Usuario(["admin"], ["1234"]);
let botonLogin = document.getElementById("loginbtn");
let botonRegistro = document.getElementById("registerbtn");
botonLogin.addEventListener("click", llamarLogin)
botonRegistro.addEventListener("click", llamarRegistro)