import { Link } from 'react-router-dom';
import './TopMenu.scss';

const TopMenu = () => {
  return (
    <nav className="top-nav">
      <ul className="top-nav--list">
        <li>
          <Link className="top-nav--link" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to="/user/:id/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to="/user/:id/settings">
            Réglage
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to="/user/:id/community">
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
