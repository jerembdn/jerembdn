import React, { FC } from 'react';

import styled from 'styled-components';
import Navigation, { NavigationGroup } from './Navigation';

const Sidebar: FC = () => {
  const navigationGroups: NavigationGroup[] = [
    {
      name: 'Me',
      links: [
        {
          name: 'is',
          label: '.is()',
          path: '/',
        },
        {
          name: 'about',
          label: '.about()',
          path: '/about',
        },
        {
          name: 'work',
          label: '.work()',
          path: '/work',
        }
      ]
    },
    {
      name: 'My Projects',
      links: [
        {
          name: 'onruntime',
          label: '.onruntime()',
          path: '/projects/onruntime',
        },
        {
          name: 'wsh',
          label: '.wsh()',
          path: '/projects/wsh',
        },
        {
          name: 'ultrad.js',
          label: '.ultradjs()',
          path: '/projects/ultrad.js',
        } 
      ]
    },
    {
      name: 'Misc',
      links: [
        {
          name: 'contact',
          label: '.contact()',
          path: '/contact',
        }
      ]
    },
    {
      name: 'Social',
      links: [
        {
          name: 'github',
          label: '.github()',
          path: 'https://github.com/jerembdn',
        },
        {
          name: 'linkedin',
          label: '.linkedin()',
          path: 'https://linkedin.com/in/jeremybdn',
        }
      ]
    }
  ];

  return (
    <Container>
      <Title>Jérémy Baudrin</Title>
      <Navigation groups={navigationGroups} />
    </Container>
  );
};

const Container = styled.aside`
  width: 250px;
  padding: 0 10px;
  background-color: #eee;
  overflow: auto;
  height: 100vh;
`;

const Image = styled.img`
`;

const Title = styled.h2`
  text-align: center;
`;

export default Sidebar;