import { NavLink } from 'react-router-dom';
import Card from './shared/Card';

function Navbar() {
  return (
    <Card>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      {' | '}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        About
      </NavLink>
    </Card>
  );
}

export default Navbar;
