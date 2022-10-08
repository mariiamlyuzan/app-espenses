import './App.css';
import { useEffect } from 'react';
import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Register } from './components/Register';
import { Login } from './components/Login';

import styled from 'styled-components';
import { CalendarComponent } from './components/Calendar/Calendar';
import { authOperations, authSelectors } from './redux/auth';
import { useSelector, useDispatch } from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Expenses from './components/Expenses';
import Navbar from './components/BurgerMenu/NavBar';
import { ExpensesForm } from './components/ExpensesForm';
import { style } from './style/style';
import { ExpensesById } from './components/ExpensesById';
import { ToastContainer } from 'react-toastify';
import ExpensesByMonth from './components/ExpensesByMonth';
import { useTranslation } from 'react-i18next';
import BtnLng from './components/BtnLng';
import 'react-toastify/dist/ReactToastify.css';
import { Profile } from './components/Profile';
import { Income } from './components/Income';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Wrapper2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h2`
  font-weight: 400;
  font-size: 22px;
  margin: 0;
  text-decoration: none;
  padding: 15px;
  min-width: 40%;
  border-radius: 8px;
  font-family: 'Kalam', cursive;
  background: linear-gradient(270deg, #b527cf, #3bd9d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Logo2 = styled(NavLink)`
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

const Link = styled(NavLink)`
  font-weight: 100;
  font-size: 15px;
  text-decoration: none;
  padding: 8px;
  padding-bottom: 0;

  color: ${style.accentColor};
  &.active {
    color: ${style.activeColor};
  }

  @media screen and (min-width: 400px) {
    font-weight: 200;
    font-size: 18px;
  }
`;

function App() {
  const { t } = useTranslation(['common']);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          {isFetchingCurrentUser || isLoggedIn ? (
            <>
              <BtnLng />
              <Logo2 to="/expenses">DiaryExpenses</Logo2>
              <Navbar />
            </>
          ) : (
            <>
              <BtnLng />
              <Logo>DiaryExpenses</Logo>

              <Wrapper2>
                <Link to="/register">{t('register')}</Link>
                <Link to="/login">{t('login')}</Link>
              </Wrapper2>
            </>
          )}
        </Wrapper>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="income"
          element={
            <ProtectedRoute>
              <Income />
            </ProtectedRoute>
          }
        />

        <Route
          path="calendar"
          element={
            <ProtectedRoute>
              <CalendarComponent />
            </ProtectedRoute>
          }
        />

        <Route
          path="expenses"
          element={
            <ProtectedRoute>
              <Expenses />
            </ProtectedRoute>
          }
        />

        <Route
          path="expenses/:expensesId"
          element={
            <ProtectedRoute>
              <ExpensesById />
            </ProtectedRoute>
          }
        />

        <Route
          path="expenses_form"
          element={
            <ProtectedRoute>
              <ExpensesForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="expenses_by_month"
          element={
            <ProtectedRoute>
              <ExpensesByMonth />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
