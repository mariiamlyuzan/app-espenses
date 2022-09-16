import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { style } from '../style/style';

import { useTranslation } from 'react-i18next';

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Link = styled(NavLink)`
  font-weight: 400;
  font-size: 35px;
  text-decoration: none;
  padding: 12px;
  min-width: 40%;
  border-radius: 8px;
  color: ${style.accentColor};

  &.active {
    color: ${style.activeColor};
  }

  &:first-child {
    margin-bottom: 20px;
  }
`;

export const HomePage = () => {
  const { t } = useTranslation(['common']);
  return (
    <Nav>
      <Link to="/register">{t('register')}</Link>
      <Link to="/login">{t('login')}</Link>
    </Nav>
  );
};
