import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { expensesSelectors } from '../redux/expenses';
import { style } from '../style/style';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  padding: 0px;
`;
const Box = styled.div`
  width: 80%;
  border-bottom: 1px solid ${style.accentColor};
  margin-bottom: 10px;
`;
const Title = styled.p`
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  padding: 0px;
  margin: 0;
  color: ${style.accentColor};
`;

const Item = styled.p`
  font-weight: 100;
  font-size: 15px;
  text-decoration: none;
  padding: 0px;

  color: ${style.accentColor};
`;
const Item2 = styled.span`
  font-weight: 100;
  font-size: 17px;
  text-decoration: none;
  padding: 0px;
  margin-left: 8px;
  color: ${style.accentColor};
`;
export default function ExpensesByMonth() {
  const { t } = useTranslation(['common']);
  const expenses = useSelector(expensesSelectors.getExpenses);

  const yearAndMonthAndMonth = expenses.map(exp => exp.date.slice(0, 7));

  const allyearAndMonthAndMonth = [...new Set(yearAndMonthAndMonth)];

  const allyearAndMonthAndMonthSort = [...allyearAndMonthAndMonth].sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <>
      {allyearAndMonthAndMonthSort &&
        allyearAndMonthAndMonthSort.map(yearAndMonth => (
          <Wrapper key={yearAndMonth}>
            <Box>
              <Title>{yearAndMonth}</Title>
              <Item>
                {t('totalFood')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.food);
                      }, 0)}
                </Item2>
              </Item>

              <Item>
                {t('totalGoods')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.goods);
                      }, 0)}
                </Item2>
              </Item>
              <Item>
                {t('totalServices')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.services);
                      }, 0)}
                </Item2>
              </Item>
              <Item>
                {t('totalMakeup')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.makeup);
                      }, 0)}
                </Item2>
              </Item>
              <Item>
                {t('totalMedicine')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.medicine);
                      }, 0)}
                </Item2>
              </Item>
              <Item>
                {t('totalClothing')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.clothing);
                      }, 0)}
                </Item2>
              </Item>
              <Item>
                {t('totalTransport')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return Number(prev) + Number(exp.transport);
                      }, 0)}
                </Item2>
              </Item>
              <Item>
                {t('total')}:
                <Item2>
                  {expenses &&
                    expenses
                      .filter(exp => exp.date.slice(0, 7) === yearAndMonth)
                      .reduce((prev, exp) => {
                        return (
                          Number(prev) +
                          Number(exp.food) +
                          Number(exp.goods) +
                          Number(exp.services) +
                          Number(exp.makeup) +
                          Number(exp.medicine) +
                          Number(exp.clothing) +
                          Number(exp.transport)
                        );
                      }, 0)}
                </Item2>
              </Item>
            </Box>
          </Wrapper>
        ))}
    </>
  );
}
