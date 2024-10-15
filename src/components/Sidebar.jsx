import { useState } from 'react';
import { SegmentedControl, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react'; // Only import the icons you're using
import classes from './NavbarSegmented.module.css';

// Define the tabs without icons
const tabs = {
  account: [
    { link: '/home', label: 'Home' },
    { link: '/feedback', label: 'Feedback' }, // Feedback page link
    { link: '/dashboard', label: 'Dashboard' }, // Dashboard page link
    { link: '/assessments', label: 'Assessments' },
  ],
};

export function Sidebar() {
  const [section, setSection] = useState('account');
  const [active, setActive] = useState('Billing');

  const links = tabs[section].map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      {/* Remove the item.icon rendering since there are no icons in the tabs */}
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          Admin Panel
        </Text>

        <SegmentedControl
          value={section}
          onChange={(value) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            //{ label: 'Account', value: 'account' },
            //{ label: 'System', value: 'general' },
          ]}
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        <Link to="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </Link>

        <Link to="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
