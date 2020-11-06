import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup.string().required("name is required").min(2, "name must be at least 2 characters long"),
	email: yup.string().required("email is required"),
	password: yup.string().required('password is required').min(4, "password must be at least 4 characters long"),
	terms: yup.boolean().required().oneOf([true], "you must agree to the Terms of Service")
});

export default formSchema;