import styled from 'styled-components';
import { style } from '../style/style';

import { useTranslation } from 'react-i18next';
import { FcMoneyTransfer } from 'react-icons/fc';

import { IconContext } from 'react-icons';

const Title = styled.h1`
  font-weight: 100;
  font-size: 20px;
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
    <>
      <Title>{t('pleaseRegisterOrLogin')}</Title>
      <IconContext.Provider value={{ size: '10em' }}>
        <FcMoneyTransfer />
      </IconContext.Provider>
    </>
  );
};
