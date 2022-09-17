import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { expensesOperations } from '../redux/expenses';
import { style } from '../style/style';
import { FcMoneyTransfer } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 20px;

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
  padding-bottom: 8px;
  min-width: 40%;
  background-color: ${style.mainColor};
  border-radius: 0 0 8px 8px;
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
  border-radius: 0 0 8px 8px;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  :hover {
    border-radius: 8px 8px 0 0;
    border-top: 1px solid ${style.accentColor};
    border-left: 1px solid ${style.accentColor};
    border-bottom: none;
  }
`;

const Title = styled.p`
  font-weight: 100;
  font-size: 20px;
  text-decoration: none;
  padding: 0px;
  margin: 5px;
  color: ${style.accentColor};
`;

export const ExpensesFormUpdate = ({ value }) => {
  const { t } = useTranslation(['common']);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      _id: value.id,
      date: value.date,
      food: value.food,
      goods: value.goods,
      services: value.services,
      makeup: value.makeup,
      medicine: value.medicine,
      clothing: value.clothing,
      transport: value.transport,
    },
    onSubmit: values => {
      dispatch(expensesOperations.updateExpenses(values));
      toast.success(t('UpdateSuccessfully'));
      navigate('/expenses');
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="date">{t('date')}</Label>
      <Input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />

      <Label htmlFor="food">{t('food')}: </Label>
      <Input
        id="food"
        name="food"
        type="food"
        onChange={formik.handleChange}
        value={formik.values.food}
      />
      <Label htmlFor="goods">{t('goods')}: </Label>
      <Input
        id="goods"
        name="goods"
        type="goods"
        onChange={formik.handleChange}
        value={formik.values.goods}
      />
      <Label htmlFor="services">{t('services')}: </Label>
      <Input
        id="services"
        name="services"
        type="services"
        onChange={formik.handleChange}
        value={formik.values.services}
      />
      <Label htmlFor="makeup">{t('makeup')}: </Label>
      <Input
        id="makeup"
        name="makeup"
        type="makeup"
        onChange={formik.handleChange}
        value={formik.values.makeup}
      />
      <Label htmlFor="medicine">{t('medicine')}: </Label>
      <Input
        id="medicine"
        name="medicine"
        type="medicine"
        onChange={formik.handleChange}
        value={formik.values.medicine}
      />
      <Label htmlFor="clothing">{t('clothing')}: </Label>
      <Input
        id="clothing"
        name="clothing"
        type="clothing"
        onChange={formik.handleChange}
        value={formik.values.clothing}
      />
      <Label htmlFor="transport">{t('transport')}: </Label>
      <Input
        id="transport"
        name="transport"
        type="transport"
        onChange={formik.handleChange}
        value={formik.values.transport}
      />
      <Title>
        Total:{' '}
        {Number(value.food) +
          Number(value.goods) +
          Number(value.services) +
          Number(value.makeup) +
          Number(value.medicine) +
          Number(value.clothing) +
          Number(value.transport)}
      </Title>
      <Button type="submit">
        <FcMoneyTransfer />
        {t('edit')}
      </Button>
    </Form>
  );
};
