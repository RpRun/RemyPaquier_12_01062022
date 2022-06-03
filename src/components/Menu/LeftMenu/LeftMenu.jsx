import './LeftMenu.scss';
import yogi from '../../../assets/yogi.svg';
import swimming from '../../../assets/swimming.svg';
import cycling from '../../../assets/cycling.svg';
import weight from '../../../assets/weight.svg';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <nav>
      <ul className="left-nav--list">
        <li className="left-nav--item">
          <Link to="/user/:id/activity/yoga">
            <img src={yogi} alt="man in yoga position" />
          </Link>
        </li>
        <li className="left-nav--item">
          <Link to="/user/:id/activity/swimming">
            <img src={swimming} alt="swimmer" />
          </Link>
        </li>
        <li className="left-nav--item">
          <Link to="/user/:id/activity/cycling">
            <img src={cycling} alt="bicycle" />
          </Link>
        </li>
        <li className="left-nav--item">
          <Link to="/user/:id/activity/weight">
            <img src={weight} alt="weight" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
