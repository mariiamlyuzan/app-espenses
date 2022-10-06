import styled from 'styled-components';
import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';
const Title = styled.h2`
  font-weight: 400;
  font-size: 22px;
  font-family: 'Kalam', cursive;
  text-decoration: none;
  padding: 12px;
  min-width: 40%;
  border-radius: 8px;
  background: linear-gradient(270deg, #b527cf, #3bd9d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export function Profile() {
  const name = useSelector(authSelectors.getUsername);
  return <Title>{name}</Title>;
}
