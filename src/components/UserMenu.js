import { authOperations } from '../redux/auth';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { style } from '../style/style';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  color: ${style.mainColor};
  border: none;
  padding: 0;
  background-color: ${style.accentColor};
  border-radius: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
`;

export default function UserMenu() {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        {t('logOut')}
      </Button>
    </Wrapper>
  );
}
