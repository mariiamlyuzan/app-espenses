import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu';
import { style } from '../../style/style';
import { useTranslation } from 'react-i18next';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 1;
  
  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background-color: ${style.mainColor};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    padding-top: 3.5rem;
    transition: 1000ms all ease-in-out;
`;
const LI = styled(NavLink)`
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  padding: 12px;

  color: ${style.accentColor};

  &.active {
    color: ${style.activeColor};
  }
`;
const RightNav = ({ open, onLink }) => {
  const { t } = useTranslation(['common']);
  return (
    <Ul open={open}>
      <LI to="/profile" onClick={onLink}>
        {t('profile')}
      </LI>
      <LI to="/calendar" onClick={onLink}>
        {t('calendar')}
      </LI>
      <LI to="/expenses" onClick={onLink}>
        {t('expenses')}
      </LI>
      <LI to="/expenses_by_month" onClick={onLink}>
        {t('expensesByMonth')}
      </LI>
      <LI to="/expenses_form" onClick={onLink}>
        {t('addExpenses')}
      </LI>
      <UserMenu />
    </Ul>
  );
};

export default RightNav;
