function renderAll_1() {
  ReactDOM.render(
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light col-7 mx-auto rounded-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            3d vkaif
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link disabled" href="#">
                3d models
              </a>
              <a class="nav-link disabled" href="#">
                Contact
              </a>
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Calculator
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>,
    document.querySelector("#header")
  );
}

renderAll_1();
