import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 350px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 4px;
  max-width: 150px;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  color: #666666;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`;

export const FormContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
