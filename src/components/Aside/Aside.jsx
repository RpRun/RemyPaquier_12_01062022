import './Aside.scss';
import LeftMenu from '../Menu/LeftMenu/LeftMenu';

const Aside = () => {
  return (
    <aside className="aside">
      <span className="copyright">Copyright, SportSee 2020</span>
      <LeftMenu />
    </aside>
  );
};

export default Aside;
