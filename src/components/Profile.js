import styled from 'styled-components';
import { authSelectors } from '../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { incomeOperations, incomeSelectors } from '../redux/income';
import { style } from '../style/style';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const Box = styled.div`
  width: 80%;
  border-bottom: 1px solid ${style.accentColor};
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 22px;
  font-family: 'Kalam', cursive;
  text-decoration: none;
  background: linear-gradient(270deg, #b527cf, #3bd9d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5px 0;
  margin: 0;
`;

const P = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${style.accentColor};
  padding: 5px 0;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 20px;
  background: linear-gradient(270deg, #b527cf, #3bd9d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5px 0;
  margin: 0;
  display: inline-block;
  margin-right: 5px;
`;

export function Profile() {
  const { t } = useTranslation(['common']);

  const name = useSelector(authSelectors.getUsername);
  const income = useSelector(incomeSelectors.getIncome);

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetch() {
      try {
        await dispatch(incomeOperations.fetchIncome());
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [dispatch]);

  const yearAndMonth = income.map(exp => exp.date.slice(0, 7));

  const allyearAndMonth = [...new Set(yearAndMonth)];

  const allyearAndMonthSort = [...allyearAndMonth].sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <>
      <Title>{name}</Title>
      <P>{t('income')}</P>
      {allyearAndMonthSort &&
        allyearAndMonthSort.map(item => (
          <Wrapper key={item}>
            <Box>
              <P>{item}: </P>
              <P>
                {income &&
                  income
                    .filter(income => income.date.slice(0, 7) === item)
                    .reduce((prev, item) => {
                      return Number(prev) + Number(item.income);
                    }, 0)}{' '}
                <Span>$</Span>
              </P>
            </Box>
          </Wrapper>
        ))}
    </>
  );
}
