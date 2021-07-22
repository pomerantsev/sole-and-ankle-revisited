import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <Wrapper>
      <SuperHeaderWrapper>
        <SuperHeader />
      </SuperHeaderWrapper>
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileHeader>
        <Logo />
        <UnstyledButton>
          <Icon id="shopping-bag" />
          <VisuallyHidden>
            Cart
          </VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="search" />
          <VisuallyHidden>
            Search
          </VisuallyHidden>
        </UnstyledButton>
        <UnstyledButton>
          <Icon id="menu" />
          <VisuallyHidden>
            Open Menu
          <VisuallyHidden>
            Search
          </VisuallyHidden>

          </VisuallyHidden>
        </UnstyledButton>
      </MobileHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  @media ${QUERIES.tabletAndDown} {
    &::before {
      content: '';
      display: block;
      border-bottom: 4px solid ${COLORS.gray[900]};
    }
  }
`;

const SuperHeaderWrapper = styled.div`
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const BaseHeader = styled.div`
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const MainHeader = styled(BaseHeader)`
  display: flex;
  align-items: baseline;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileHeader = styled(BaseHeader)`
  display: none;
  align-items: center;

  & > :first-child {
    margin-right: auto;
  }

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
