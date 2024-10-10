
import { Navbar, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import './sidebar.css';

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Feedback', link: '/feedback' },
];

function Sidebar() {
  return (
    <Navbar width={{ base: 200 }} p="xs" className="sidebar">
      <div className="sidebar-header">
        <Text size="lg" weight={700} className="sidebar-title">Admin Panel</Text>
      </div>
      <div className="sidebar-links">
        {navItems.map((item) => (
          <Link key={item.label} to={item.link} className="sidebar-link">
            {item.label}
          </Link>
        ))}
      </div>
    </Navbar>
  );
}

export default Sidebar;
