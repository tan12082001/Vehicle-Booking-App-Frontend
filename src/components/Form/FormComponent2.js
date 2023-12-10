import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import styled from '@emotion/styled';

const FormComponent2 = ({
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

FormComponent2.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pricePerHr: PropTypes.string.isRequired,
    seating_capacity: PropTypes.number.isRequired,
    rental_duration: PropTypes.number.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
  schema: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pricePerHr: PropTypes.string.isRequired,
    seating_capacity: PropTypes.number.isRequired,
    rental_duration: PropTypes.number.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledForm = styled(Form)`
  // border: 1px solid blue;
  padding: 2rem;

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

export default FormComponent2;
