import { useState } from 'react';

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};

/*
In component:
  const [values, handleChange] = useForm(formObjectState);
  <input ... onChange={handleChange} value={values.data} />

*/

export default useForm;
