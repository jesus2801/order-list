import { ChangeEvent, useState } from 'react';

import { UseValidateForm } from './interfaces';

const useValidateForm = ({ parameters }: UseValidateForm) => {
  let initialValue: { [k: string]: string } = {};
  for (let i = 0, n = parameters.length; i < n; i++)
    initialValue[parameters[i].name] = parameters[i].value;

  const [data, setData] = useState(initialValue);
  const [err, setErr] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = () => {
    for (let i = 0, n = parameters.length; i < n; i++) {
      if (!parameters[i].validation(data[parameters[i].name])) {
        setErr(parameters[i].errorMsg);
        return false;
      }
    }

    setErr('');
    return true;
  };

  return {
    data,
    err,
    onChange,
    onSubmit,
  };
};

export default useValidateForm;
