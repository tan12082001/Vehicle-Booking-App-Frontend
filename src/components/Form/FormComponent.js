import { Form, Formik } from 'formik';
import styled from '@emotion/styled';


export const FormComponent = ({
  initialValues,
  schema,
  onSubmit,
  children,
  className,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <StyledForm className={className}>
        {children}
      </StyledForm>
    </Formik>
  );
};

const StyledForm = styled(Form)`
  border: 1px solid orange;

  &.flex {
    dispaly: flex;
    width: 60%;
  }

  & > .spanTwo {
    grid-column: span 2;
  }

  & > .margin {
    gird-colum: span 2;
    margin-left: 15%;
    margin-right: 15%;
  }

  &.horizontalForm {
    grid-template-columns: 5fr 1fr;
    align-items: last baseline;
  }
`;
