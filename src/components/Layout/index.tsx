import React, { FC } from 'react';

import Sidebar from 'components/Sidebar';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
`;

export default Layout;