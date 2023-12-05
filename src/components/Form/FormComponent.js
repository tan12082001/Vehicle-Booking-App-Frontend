import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import styled from '@emotion/styled';

const FormComponent = ({
  initialValues,
  schema,
  onSubmit,
  children,
  className,
}) => (
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

FormComponent.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  schema: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledForm = styled(Form)`
  border: 1px solid orange;

  &.flex {
    display: flex;
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

export default FormComponent;
