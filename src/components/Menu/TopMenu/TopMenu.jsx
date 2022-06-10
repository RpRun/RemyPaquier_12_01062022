import { Link } from 'react-router-dom';
import { userId, pathByUser } from '../../../cfg';
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
          <Link className="top-nav--link" to={pathByUser}>
            Profil
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to={pathByUser + '/settings'}>
            Réglage
          </Link>
        </li>
        <li>
          <Link className="top-nav--link" to={pathByUser + '/community'}>
            Communauté
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
