import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { incomeOperations } from '../redux/income';
import { style } from '../style/style';

import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  width: 280px;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 30px;
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
  color: ${style.accentColor};
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: ${style.accentColor};
  border: none;
  border-bottom: 1px solid ${style.accentColor};
  padding: 6px;
  width: 96%;
  background-color: ${style.mainColor};
  border-radius: 0 0 8px 8px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const Button = styled.button`
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  text-decoration: none;
  color: ${style.accentColor};
  border: 1px solid ${style.accentColor};
  padding: 12px;
  background-color: ${style.mainColor};
  border-radius: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  :hover {
    background: linear-gradient(270deg, #b527cf, #3bd9d9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Income = () => {
  const { t } = useTranslation(['common']);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      date: '',
      income: '',
    },
    onSubmit: values => {
      if (values.date === '') {
        return toast.error(t('PleasePickDate'));
      }

      dispatch(incomeOperations.addIncome(values));

      toast.success(
        localStorage.getItem('i18nextLng') === 'en'
          ? `${values.date} add to comings-in`
          : `${values.date} додано`,
      );

      formik.resetForm();
    },
  });
  return (
    <>
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

          <Label htmlFor="earned">{t('income')}</Label>
          <Input
            id="income"
            name="income"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.income}
          />

          <Button type="submit">{t('add')}</Button>
        </Form>
      </Wrapper>
    </>
  );
};
