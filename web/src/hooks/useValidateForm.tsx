import { ChangeEvent, useState } from 'react';

import { UseValidateForm } from './interfaces';

const useValidateForm = ({ parameters }: UseValidateForm) => {
  //set the initial data value
  let initialValue: { [k: string]: string } = {};
  //insert the initial data in the variable
  for (let i = 0, n = parameters.length; i < n; i++)
    initialValue[parameters[i].name] = parameters[i].value;

  //set the data and error state
  const [data, setData] = useState(initialValue);
  const [err, setErr] = useState('');

  //when the data change
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    //update the state
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  //when the user submit the form
  const onSubmit = () => {
    //validate all fields
    for (let i = 0, n = parameters.length; i < n; i++) {
      //if some field is incorrect, set the error and return false
      if (
        parameters[i].validation &&
        !parameters[i].validation(data[parameters[i].name])
      ) {
        setErr(parameters[i].errorMsg);
        return false;
      }
    }

    //if there is no problem, set the error as empty string and return true
    setErr('');
    return true;
  };

  return {
    data,
    err,
    setErr,
    onChange,
    onSubmit,
  };
};

export default useValidateForm;
