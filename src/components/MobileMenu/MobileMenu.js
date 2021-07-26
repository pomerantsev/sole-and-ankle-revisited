/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MobileMenuOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <MobileMenuContent
        aria-label="Menu"
      >
        <DismissWrapper>
          <CloseButton
            onClick={onDismiss}
          >
            <Icon id="close" />
            <VisuallyHidden>
              Dismiss menu
            </VisuallyHidden>
          </CloseButton>
        </DismissWrapper>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </MobileMenuContent>
    </MobileMenuOverlay>
  );
};

const MobileMenuOverlay = styled(DialogOverlay)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  // Using a ::before element because I'm not sure
  // how to convert an hsl value to an hsla value in a DRY manner,
  // so instead of doing that, I'm using a combination of
  // background color and opacity, and we shouldn't use
  // opacity on the element itself (so that we can have
  // fully opaque children).
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${COLORS.gray[900]};
    opacity: 0.8;
  }
`;

const MobileMenuContent = styled(DialogContent)`
  position: absolute;
  left: 75px;
  top: 0;
  right: 0;
  bottom: 0;

  padding: 32px;

  background-color: ${COLORS.white};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${32 / 16}rem;

  overflow-y: auto;
`;

const DismissWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const CloseButton = styled(UnstyledButton)`
  position: relative;
  right: -16px;
  top: -6px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${16 / 16}rem;

  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;

  & > a {
    color: ${COLORS.gray[900]};
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${COLORS.secondary};
      }
    }
  }
`;

const Footer = styled.footer`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: ${8 / 16}rem;

  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};

  & > a {
    color: ${COLORS.gray[700]};
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default MobileMenu;
