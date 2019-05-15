import styled from 'styled-components';
import { device } from "../../../settings/device";

// Forms, inputs, buttons

export const Form = styled.form`
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.tablet} {
    flex-direction: row;
}
`;
Form.displayName = "Form";

export const WrapperItem = styled.div`
  width: 100%;
  margin: 0.6rem 0px;
  @media ${device.tablet} {
    width: 25%
}
`;
export const WrapperSubmit = styled.div`
  width: 100%
  @media ${device.tablet} {
    width: 10%
  }
`;
export const Input = styled.input`
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;  
  height: 35px;
  padding-left: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
`;
Input.displayName = "Input";

export const Select = styled.select`
  width: 100%;
  height: 35px;
  padding-left: 20px;
  -webkit-appearance: none;
  -moz-appearance : none;
  border:1px solid #ccc;
  border-radius:3px;
  background-color: #fff;
`;
Select.displayName = 'SelectPosition';

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;
Button.displayName = 'ButtonSubmit';

export const ErrorInput = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #FF9494;
  font-size: 0.9rem;
  @media ${device.tablet} {
    position: absolute;
  }
`;
ErrorInput.displayName = 'ErrorInput';
