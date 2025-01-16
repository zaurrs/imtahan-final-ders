import * as yup from 'yup';

export const adminschema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive().integer(),
  image: yup.string().url().required(),
  category: yup.string().required(),
});