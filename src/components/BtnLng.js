import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import styled from 'styled-components';
import { style } from '../style/style';

const Select = styled.select`
  width: 50px;
  background-color: ${style.mainColor};
  color: ${style.accentColor};
  border: none;
  padding-bottom: 3px;
  font-size: 15px;
  border-radius: 0 0 8px 8px;
  border-bottom: 1px solid ${style.accentColor};
`;

const Option = styled.option`
  color: ${style.accentColor};
  font-size: 13px;
`;
export default function BtnLng() {
  const { i18n } = useTranslation(['common']);

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  const handleLanguageChange = e => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div id="navbarNav">
      <Select
        value={localStorage.getItem('i18nextLng')}
        onChange={handleLanguageChange}
      >
        <Option value="en">en</Option>
        <Option value="ua">ua</Option>
      </Select>
    </div>
  );
}
