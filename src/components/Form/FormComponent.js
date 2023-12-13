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
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirm_password: PropTypes.string.isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    selectedCity: PropTypes.string.isRequired,
  }).isRequired,
  schema: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirm_password: PropTypes.string.isRequired,
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    selectedCity: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledForm = styled(Form)`
  border: 1px solid blue;
  padding: 2rem;
  @media (max-width: 375px) {
    padding: 1rem;
  }

  &.flex {
    display: flex;
    width: 60%;
  }

  & > .spanTwo {
    grid-column: span 2;
  }

  & > .margin {
    gird-column: span 2;
    margin-left: 15%;
    margin-right: 15%;
  }
`;

export default FormComponent;
