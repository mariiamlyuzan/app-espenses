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
`;
const Title = styled.p`
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  padding: 0px;

  color: ${style.accentColor};
`;

const Item = styled.p`
  font-weight: 100;
  font-size: 15px;
  text-decoration: none;
  padding: 0px;

  color: ${style.accentColor};
`;
export default function ExpensesByMonth() {
  const { t } = useTranslation(['common']);
  const expenses = useSelector(expensesSelectors.getExpenses);

  const year = expenses.map(exp => exp.date.slice(0, 4));
  const allYear = [...new Set(year)];

  const allYearSort = [...allYear].sort((a, b) => Number(b) - Number(a));

  return (
    <>
      {allYearSort &&
        allYearSort.map(year => (
          <Wrapper key={year}>
            <Box>
              <Title>
                {t('january')} {year}
              </Title>

              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '01',
                    )
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
              </Item>
            </Box>
            <Box>
              <Title>
                {t('february')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '02',
                    )
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
              </Item>
            </Box>
            <Box>
              <Title>
                {t('march')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '03',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('april')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '04',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('may')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '05',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('june')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '06',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('july')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '07',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('august')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '08',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('september')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '09',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('october')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '10',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('november')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '11',
                    )
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
              </Item>
            </Box>

            <Box>
              <Title>
                {t('december')} {year}
              </Title>
              <Item>
                {t('totalFood')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.food);
                    }, 0)}
              </Item>

              <Item>
                {t('totalGoods')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.goods);
                    }, 0)}
              </Item>
              <Item>
                {t('totalServices')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.services);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMakeup')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.makeup);
                    }, 0)}
              </Item>
              <Item>
                {t('totalMedicine')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.medicine);
                    }, 0)}
              </Item>
              <Item>
                {t('totalClothing')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.clothing);
                    }, 0)}
              </Item>
              <Item>
                {t('totalTransport')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
                    .reduce((prev, exp) => {
                      return Number(prev) + Number(exp.transport);
                    }, 0)}
              </Item>
              <Item>
                {t('total')}:
                {expenses &&
                  expenses
                    .filter(
                      exp =>
                        exp.date.slice(0, 4) === year &&
                        exp.date.slice(5, 7) === '12',
                    )
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
              </Item>
            </Box>
          </Wrapper>
        ))}
    </>
  );
}
