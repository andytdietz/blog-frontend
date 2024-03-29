export function Header() {
  return (
    <div>
      <header>
        {/* <a href="#">Home</a> | <a href="#">All Posts</a> */}

        <nav className="navbar fixed-top bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Bloggr
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#posts-index">
                    All Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#posts-new">
                    New Post
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
