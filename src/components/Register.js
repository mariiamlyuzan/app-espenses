import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import { style } from '../style/style';

import * as Yup from 'yup';
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
  padding: 7px;
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
  padding: 12px;
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
  border-radius: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
  :hover {
    border-top: 1px solid ${style.accentColor};
    border-left: 1px solid ${style.accentColor};
    border-bottom: none;
  }
`;

const Span = styled.span`
  color: red;
`;

const Div = styled.div`
  text-align: left;
  min-width: 40%;
`;

export const Register = () => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(
          2,
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Too Short!'
            : 'Занадто коротке!',
        )
        .max(
          30,
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Too Long!'
            : 'Занадто довге',
        )
        .required(
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Required'
            : 'Вимагається',
        ),
      email: Yup.string()
        .email(
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Invalid email'
            : 'Недійсна електронна адреса',
        )
        .required(
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Required'
            : 'Вимагається',
        ),
      password: Yup.string()
        .min(
          6,
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Too Short!'
            : 'Занадто короткий!',
        )
        .max(
          50,
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Too Long!'
            : 'Занадто довгий',
        )
        .required(
          localStorage.getItem('i18nextLng') === 'en'
            ? 'Required'
            : 'Вимагається',
        ),
    }),
    onSubmit: values => {
      dispatch(authOperations.register(values));
      formik.resetForm();
    },
  });
  return (
    <Wrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="name">{t('name')}</Label>
        <Div>
          {formik.touched.name && formik.errors.name && (
            <Span>{formik.errors.name}</Span>
          )}
        </Div>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <Label htmlFor="email">{t('emailAddress')}</Label>
        <Div>
          {formik.touched.email && formik.errors.email && (
            <Span>{formik.errors.email}</Span>
          )}
        </Div>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Label htmlFor="password">{t('password')}</Label>
        <Div>
          {formik.touched.password && formik.errors.password && (
            <Span>{formik.errors.password}</Span>
          )}
        </Div>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit">{t('register')}</Button>
      </Form>
    </Wrapper>
  );
};
