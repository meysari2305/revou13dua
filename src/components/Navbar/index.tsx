import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
  },
  {
    label: 'Product',
    key: '/product',
  },
  {
    label: 'Profile',
    key: '/profile',
  },
  {
    label: 'Log Out',
    key: '/login',
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    window.location.replace('/login');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === '/register') {
      handleLogOut();
      return;
    }
    navigate(e.key);
  };

  return <Menu onClick={onClick} items={items} mode={'horizontal'} />;
};

export default Navbar;
