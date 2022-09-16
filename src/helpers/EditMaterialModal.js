import { IconContext } from 'react-icons';
import { BsX } from 'react-icons/bs';
import styled from 'styled-components';
import { style } from '../style/style';

const BackDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 40px 0 0 0;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${style.mainColor};
  overflow: auto;
`;

const Modal = styled.div`
  position: relative;
  padding: 20px;
  max-width: 80%;
  width: 80%;
  max-height: 100vh;
  border-radius: 5px;
  z-index: 10;
  height: 100vh;
  background-color: #282c34;
  border: none;
  color: ${style.accentColor};
  overflow-y: auto;
`;
const Button = styled.button`
  position: absolute;
  padding: 0;

  width: 30px;
  height: 30px;
  border: 0px;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border-radius: 5px;
`;

export default function EditMaterialModal({ item, onClose }) {
  return (
    <BackDrop>
      <Modal>
        <Button type="button" onClick={onClose}>
          <IconContext.Provider
            value={{
              color: '#C0C0C0',
              size: '2.5em',
            }}
          >
            <BsX />
          </IconContext.Provider>
        </Button>
        {item}
      </Modal>
    </BackDrop>
  );
}
