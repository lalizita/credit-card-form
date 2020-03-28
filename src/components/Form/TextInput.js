import React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  Label,
  Input,
} from '@rebass/forms'
import { Text } from 'rebass'


const TextInput = ({ label, ...props }) => {
  const formik = useFormikContext();
  const [field, meta] = useField(props);
  // which we can spread on <input> and also replace ErrorMessage entirely.
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <Text color="#f00">{meta.error}</Text>
      ) : null}
    </>
  );
};


export default TextInput;