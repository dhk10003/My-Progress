import { Formik } from "formik";

import useAuthCalls from "../hooks/useAuthCalls";
import LoginForm, { loginSchema } from "../components/Auth/LoginForm";

const Login = () => {
  const { login } = useAuthCalls();

  return (
    <div>
      {/* 
        formik is a library that helps us with form state management and validation
        it is a wrapper around the form
        it handles the form state and validation
        it takes an object called initialValues which is the initial state of the form
        it takes a validationSchema which is a schema for the form, this is what we made with Yup
        it takes an onSubmit function which is called when the form is submitted
        it takes a component prop which is the component that will be rendered
        the component prop is passed a bunch of props by formik
        these props are used to handle the form state and validation

       */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          // the login function is called when the form is submitted, passing in the values, which we set up in the initialValues object
          // the validationSchema is also passed in, so the validation is handled by formik
          login(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        // the props that will be passed to the LoginForm component are: 
        component={props => <LoginForm {...props} />}></Formik>
    </div>
  );
};

export default Login;
