function Hero() {
  return ( 
    <section >
      <div style={{ "padding": "35px" }} class="container">
      
        <div class="row">
          <div style={{ "margin-right": "1.25rem" }} class="col">
            <img src='https://i.ibb.co/Mkwqs0Z/logo.png'></img>
          </div>
          <div class="col-10">
            <nav className="navbar">
              <ul className="navbar-links">
                <li><a href="/">SIGN IN </a></li>
                <li><a href="/about">LEGAL</a></li>
                <li><a href="/services">LICENSES</a></li>
                <li><a href="/contact">SECURITY</a></li>
                <li><a href="/contact">CAREERS</a></li>
                <li><a href="/contact">PRESS</a></li>
                <li><a href="/contact">SUPPORT</a></li>
                <li><a href="/contact">STATUS</a></li>
                <li><a href="/contact">CODEBLOG</a></li>
              </ul>
            </nav>
          </div>
          <div style={{ "margin-left": "1.25rem" }} class="col">
            <img src='https://i.ibb.co/brbtVxt/Layer-2.png'></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



