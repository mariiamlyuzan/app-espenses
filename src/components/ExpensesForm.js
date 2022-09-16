import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { expensesOperations, expensesSelectors } from '../redux/expenses';
import { style } from '../style/style';
import { FcMoneyTransfer } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  max-width: 40%;
  padding: 20px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: ${style.accentColor};
  border: none;
  border-bottom: 1px solid ${style.accentColor};
  padding: 12px;
  background-color: ${style.mainColor};
  border-radius: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  :hover {
    border-top: 1px solid ${style.accentColor};
    border-left: 1px solid ${style.accentColor};
    border-bottom: none;
  }
`;

export const ExpensesForm = ({ value }) => {
  const { t } = useTranslation(['common']);
  const expenses = useSelector(expensesSelectors.getExpenses);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      date: value ? value : '',
      food: 0,
      goods: 0,
      services: 0,
      makeup: 0,
      medicine: 0,
      clothing: 0,
      transport: 0,
    },
    onSubmit: values => {
      console.log(values);
      if (
        expenses.find(
          exp => exp.date.toLowerCase() === values.date.toLowerCase(),
        )
      ) {
        toast.error(
          localStorage.getItem('i18nextLng') === 'en'
            ? `${values.date} already exist.`
            : `${values.date} вже існує`,
        );

        return;
      }

      if (values.date === '') {
        return toast.error(t('PleasePickDate'));
      }
      dispatch(expensesOperations.addExpenses(values));

      formik.resetForm();
      toast.success(
        localStorage.getItem('i18nextLng') === 'en'
          ? `${values.date} add to expenses`
          : `${values.date} додано`,
      );
    },
  });
  return (
    <Wrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="date">{t('date')}</Label>
        <Input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />

        <Label htmlFor="food">{t('food')}</Label>
        <Input
          id="food"
          name="food"
          type="food"
          onChange={formik.handleChange}
          value={formik.values.food}
        />
        <Label htmlFor="goods">{t('goods')}</Label>
        <Input
          id="goods"
          name="goods"
          type="goods"
          onChange={formik.handleChange}
          value={formik.values.goods}
        />
        <Label htmlFor="services">{t('services')}</Label>
        <Input
          id="services"
          name="services"
          type="services"
          onChange={formik.handleChange}
          value={formik.values.services}
        />
        <Label htmlFor="makeup">{t('makeup')}</Label>
        <Input
          id="makeup"
          name="makeup"
          type="makeup"
          onChange={formik.handleChange}
          value={formik.values.makeup}
        />
        <Label htmlFor="medicine">{t('medicine')}</Label>
        <Input
          id="medicine"
          name="medicine"
          type="medicine"
          onChange={formik.handleChange}
          value={formik.values.medicine}
        />
        <Label htmlFor="clothing">{t('clothing')}</Label>
        <Input
          id="clothing"
          name="clothing"
          type="clothing"
          onChange={formik.handleChange}
          value={formik.values.clothing}
        />
        <Label htmlFor="transport">{t('transport')}</Label>
        <Input
          id="transport"
          name="transport"
          type="transport"
          onChange={formik.handleChange}
          value={formik.values.transport}
        />
        <Button type="submit">
          <FcMoneyTransfer /> {t('add')}
        </Button>
      </Form>
    </Wrapper>
  );
};
