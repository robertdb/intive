import styled from 'styled-components';

// Forms, inputs, buttons

export const Form = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
Form.displayName = "Form";

export const Input = styled.input`
  width: 200px;
  height: 35px;
  padding-left: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
Input.displayName = "Input";

export const Select = styled.select`
`;
Select.displayName = 'SelectPosition';

export const Button = styled.button`
  width: 100px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;
Button.displayName = 'ButtonSubmit';