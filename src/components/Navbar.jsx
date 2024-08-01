import "../styles/Navbar.css"; // Puedes agregar tus estilos en este archivo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">PH-Sport</a>
      </div>
      <div>
        <ul className="navbar-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <input type="text" className="search" />
        <button className="search">Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;
