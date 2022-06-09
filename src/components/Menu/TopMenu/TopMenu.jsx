import { Link } from 'react-router-dom';
import { userId, pathbyUser } from '../../../cfg';
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
          <Link className="top-nav--link" to={pathbyUser}>
            Profil
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to={pathbyUser + '/settings'}>
            Réglage
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to={pathbyUser + '/community'}>
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
