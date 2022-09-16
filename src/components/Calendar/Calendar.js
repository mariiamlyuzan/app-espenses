import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import './Calendar.css';
import { useModal } from '../../hooks/useModal';

import EditMaterialModal from '../../helpers/EditMaterialModal';

import { ExpensesForm } from '../ExpensesForm';
import { useEffect, useState } from 'react';
import { expensesOperations } from '../../redux/expenses';
import { useDispatch } from 'react-redux';
import { FooterPage } from '../Footer';

const Wrapper = styled.div`
  max-width: 90%;
  margin: auto;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarComponent = () => {
  const dispatch = useDispatch();
  const [dateToAdd, setDateToAdd] = useState(null);
  const { isModalOpen, closeModal, openModal } = useModal();
  const date = new Date();

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
  const onClickDay = e => {
    setDateToAdd(
      e.toLocaleString('sv', { timeZoneName: 'short' }).slice(0, 10),
    );
    openModal();
  };

  return (
    <>
      <Wrapper>
        <Calendar
          value={date}
          onClickDay={e => onClickDay(e)}
          locale={
            localStorage.getItem('i18nextLng') === 'en' ? 'en-EN' : 'ua-UA'
          }
        />
        {isModalOpen && (
          <EditMaterialModal
            item={<ExpensesForm value={dateToAdd} />}
            onClose={closeModal}
          />
        )}
      </Wrapper>
      <FooterPage />
    </>
  );
};
