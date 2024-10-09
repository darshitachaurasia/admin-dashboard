// src/components/Sidebar.jsx

import { Navbar, Group, ScrollArea, Code } from '@mantine/core';
import {
  IconGauge,
  IconFileText,
  IconUsers,
  IconLogout,
} from '@tabler/icons-react';
import './sidebar.css'; // Import the CSS file for sidebar styles

const navItems = [
  { label: 'Home', icon: IconGauge, link: '/' },
  { label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
  { label: 'Feedback', icon: IconFileText, link: '/feedback' },
  { label: 'Assessments', icon: IconUsers, link: '/assessments' },
];

export function Sidebar() {
  return (
    <Navbar width={{ base: 260 }} p="xs" className="sidebar">
      {/* Navbar Header Section */}
      <Navbar.Section className="sidebar-header">
        <Group position="apart">
          <Code className="sidebar-title">Admin Panel</Code>
        </Group>
      </Navbar.Section>

      {/* Navbar Links Section */}
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {navItems.map((item) => (
          <a
            href={item.link}
            key={item.label}
            className="sidebar-link"
          >
            <item.icon className="sidebar-icon" />
            <span>{item.label}</span>
          </a>
        ))}
      </Navbar.Section>

      {/* Navbar Footer Section */}
      <Navbar.Section className="sidebar-footer">
        <a href="#" className="sidebar-logout">
          <IconLogout className="sidebar-icon" />
          <span>Log Out</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
