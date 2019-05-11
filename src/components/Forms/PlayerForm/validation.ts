import * as Yup from 'yup';

export const SearchablePlayerSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Must be longer than 2 characters')
        .max(20, 'Nice try, nobody has a first name that long')
        .required('Required'),
    position: Yup.string()
        .notOneOf(['position'], 'Please select the position')
        .required('Required'),
    age: Yup.number()
        .min(18, 'Must be older than 18 years')
        .max(40, 'Must be younger than 40 years')
        .required('Required'),
});