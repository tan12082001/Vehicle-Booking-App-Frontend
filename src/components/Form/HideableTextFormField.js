import { useField } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
  FieldErrorInfo,
  Input,
  InputContainer,
  InputLabel,
  InputWrapper,
} from './FormField';

const HideableTextFormField = ({
  label,
  lpiSrc,
  rpiSrc,
  className,
  name,
  id,
  // apiKey,
  ...props
}) => {
  const [field, meta] = useField(name);
  const [showKey, setShowKey] = useState(false);
  const handleToggle = () => {
    setShowKey(!showKey);
  };

  return (
    <>
      <InputWrapper className={className}>
        <InputLabel htmlFor={props.name || props.id}>{label}</InputLabel>
        <InputContainer>
          <Input {...field} {...props} type={showKey ? 'text' : 'password'} />
          <VisibiltyToggleIconsArea>
            {showKey ? (
              <VisibilityIcon
                onClick={handleToggle}
                sx={{ zIndex: 5, color: '#C2BEBC' }}
              />
            ) : (
              <VisibilityOffIcon
                onClick={handleToggle}
                sx={{ zIndex: 5, color: '#C2BEBC' }}
              />
            )}
          </VisibiltyToggleIconsArea>
        </InputContainer>
        {meta.touched && meta.error ? (
          <FieldErrorInfo>{meta.error}</FieldErrorInfo>
        ) : null}
      </InputWrapper>
    </>
  );
};

HideableTextFormField.propTypes = {
  label: PropTypes.string.isRequired,
  lpiSrc: PropTypes.string.isRequired,
  rpiSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // apiKey: PropTypes.string,
};

const VisibiltyToggleIconsArea = styled.div`
  display: flex;
  margin-right: 1rem;
  margin-left: auto;
  margin-top: 0.75rem;
`;

export default HideableTextFormField;
