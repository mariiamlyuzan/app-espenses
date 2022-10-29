import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { expensesSelectors } from '../redux/expenses';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { style } from '../style/style';
import { useTranslation } from 'react-i18next';
import { expensesOperations } from '../redux/expenses';
import { useDispatch } from 'react-redux';

const Box = styled.div`
  width: 280px;
  padding: 20px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Link = styled(NavLink)`
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  padding: 0px;
  margin: 5px;
  color: ${style.accentColor};
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 20px;
  padding: 8px;
  min-width: 40%;

  color: ${style.accentColor};
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: ${style.accentColor};
  border: none;
  border-bottom: 1px solid ${style.accentColor};
  padding: 8px;
  min-width: 40%;
  background-color: ${style.mainColor};
  border-radius: 0 0 8px 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export default function Expenses() {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const expenses = useSelector(expensesSelectors.getExpenses);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetch() {
      try {
        await dispatch(expensesOperations.fetchExpenses());
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [dispatch]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleExpenses = () => {
    return expenses && expenses.filter(exp => exp.date.includes(filter));
  };

  const filterExpenses = getVisibleExpenses().reverse();
  return (
    <Box>
      <Wrapper>
        <Label>
          {t('findExpenses')}
          <Input
            type="text"
            placeholder={t('yyyy/mm/dd')}
            value={filter}
            onChange={changeFilter}
          ></Input>
        </Label>

        {filterExpenses &&
          filterExpenses.map(exp => (
            <div key={exp._id}>
              <Link to={`${exp._id}`}>{exp.date}</Link>
            </div>
          ))}
      </Wrapper>
    </Box>
  );
}
