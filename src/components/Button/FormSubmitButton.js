import styled from '@emotion/styled';

const FormSubmitButton = styled.button`
  padding: 0.56rem 5.06rem;
  font-weight: 400;
  color: #000;
  margin-top: 10px;
  border-radius: 0.9rem;
  border: 1px solid transparent;
  font-size: 1.125rem;
  height: fit-content;
  cursor: pointer;

  @media (max-width: 380px) {
    border-radius: 3rem;
  }

  &.contact {
    width: 100%;
    background-color: #2857D1;
    margin-top: 2rem;
    color: white;
  }

  &.contact1 {
    width: 100%;
    background-color: #bdbdbd;
    margin-bottom: 2rem;
  }

  &.forgotPasswordBtn {
    width: 100%;
    background-color: #bdbdbd;
    margin-bottom: 2rem;
  }

  &.tinyFont {
    font-size: 1.125rem;
  }

  &.lightGreyBg {
    background-color: #bdbdbd;
    color: white;
  }

  &.smallPadding {
    padding: 0.62rem 5rem;
  }

  &.fit-content {
    width: fit-content;
  }
`;

export default FormSubmitButton;
