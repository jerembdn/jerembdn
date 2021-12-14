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
          label: '.onRuntime()',
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
  height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
`;

export default Sidebar;