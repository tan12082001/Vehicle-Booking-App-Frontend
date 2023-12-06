import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

export const SelectField = ({
  label, lpiSrc, rpiSrc, className, name, id, ...props
}) => {
  const [field, meta] = useField(name);
  return (
    <InputWrapper className={className}>
      <InputLabel htmlFor={props.name || props.id}>
        {label}
      </InputLabel>
      <InputContainer>
        <Select {...field} {...props} />
        {lpiSrc ? <LeftPlaceHolderCardIcon alt="icon" src={lpiSrc} /> : null}
        {lpiSrc ? <RightPlaceHolderCardIcon alt="icon" src={lpiSrc} /> : null}
      </InputContainer>
      {meta.touched && meta.error ? (
        <FieldErrorInfo>{meta.error}</FieldErrorInfo>
      ) : null}
    </InputWrapper>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  lpiSrc: PropTypes.string.isRequired,
  rpiSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const TextInputField = ({
  label, lpiSrc, rpiSrc, className, name, placeholder, id, ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <InputWrapper className={className}>
      <InputLabel htmlFor={props.name || props.id}>
        {label}
      </InputLabel>
      <InputContainer>
        <Input {...field} {...props} className={className || ''} placeholder={placeholder} />
        {lpiSrc ? <LeftPlaceHolderCardIcon alt="icon" src={lpiSrc} /> : null}
        {lpiSrc ? <RightPlaceHolderCardIcon alt="icon" src={lpiSrc} /> : null}
      </InputContainer>
      {meta.touched && meta.error ? (
        <FieldErrorInfo>{meta.error}</FieldErrorInfo>
      ) : null}
    </InputWrapper>
  );
};

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  lpiSrc: PropTypes.string.isRequired,
  rpiSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const TextAreaInputField = ({
  label,
  lpiSrc,
  rpiSrc,
  className,
  name,
  id,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <InputWrapper className={className}>
      <InputLabel htmlFor={props.name || props.id}>{label}</InputLabel>
      <InputContainer>
        <TextArea
          {...field}
          {...props}
          className={className || ''}
          rows={10}
        />
        {lpiSrc ? <LeftPlaceHolderCardIcon alt="icon" src={lpiSrc} /> : null}
        {rpiSrc ? <RightPlaceHolderCardIcon alt="icon" src={rpiSrc} /> : null}
      </InputContainer>
      {meta.touched && meta.error ? (
        <FieldErrorInfo>{meta.error}</FieldErrorInfo>
      ) : null}
    </InputWrapper>
  );
};

TextAreaInputField.propTypes = {
  label: PropTypes.string.isRequired,
  lpiSrc: PropTypes.string.isRequired,
  rpiSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const InputWrapper = styled.div`
  width: 100%;
`;

export const InputLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
`;

const Select = styled.select`
  /* border: 2px solid red; */
  border: 1px solid grey;
  border-radius: 4px;
  padding: 1rem;
  font-weight: bolder;
  color: black;
  font-size: 0.9rem;

  appearance: none;

  &:focus {
    outline: none;
    border-color: grey;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border: 2px solid white;
  border-radius: 4px;
  padding: 0.5rem;
  text-align: left;
  font-weight: bolder;
  color: black;

  &:focus {
    outline: none;
    border-color: 2px solid white;
  }
  &:hover {
    cursor: pointer;
  }

  &.mailingList {
    color: white;
    background-color: transparent;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    padding: 0.56rem 2.88rem;
  }

  &.mailingList::placeholder {
    color: white;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
  }

  &.contact {
    border: 1px solid grey;
    padding: 0.94rem 1.81rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  &.contact::placeholder {
    color: 1px solid grey;
    font-size: 1.25rem;
    font-weight: 400;
  }

  &.city {
    // border: 2px solid green;
    width: 10rem;
    margin-right: 3rem;
  }

  &.state {
    // border: 2px solid green;
    width: 10rem;
    margin-left: 3rem;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid grey;
  border-radius: 4px;
//   padding: ;
  text-align: left;
  font-weight: bolder;
  color: black;
  font-size: 0.9rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: grey;
  }
  &:hover {
    cursor: pointer;
  }

  &.contact {
    border: 1px solid grey;
    padding: 0.94rem 1.81rem;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  &.contact::placeholder {
    color: 1px solid grey;
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  height: fit-content;
  border: 1px solid #BDBDBD;
  border-radius: 3px;

  & > * {
    grid-column: 1;
    grid-row: 1;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const LeftPlaceHolderCardIcon = styled.img`
  height: 1.5rem;
  display: grid;
  margin-left: 0.8rem;
  margin-top: 0.8rem;
`;

export const RightPlaceHolderCardIcon = styled.img`
  height: 1.5rem;
  display: grid;
  margin-right: 1rem;
  margin-left: auto;
  margin-top: 0.8rem;
`;

export const FieldErrorInfo = styled.div`
  font-size: .7rem;
  color: red;
  text-align: left;
`;
