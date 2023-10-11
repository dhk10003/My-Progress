import React from "react";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/Auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <div>
      {/* This code snippet uses Formik, a form library for React, to create and manage a registration form. */}
      <Formik
        // Define the initial values for form fields.
        initialValues={{
          username: "",
          first_name: "",
          last_name: "",
          email: "",
          image: "",
          bio: "",
          city: "",
          password: "",
        }}

        // Specify the validation schema to enforce validation rules on form fields.
        // This ties into our schema we created with Yup.
        validationSchema={registerSchema}

        // Define the form submission handler.
        onSubmit={(values, actions) => {
          // When the form is submitted, invoke the 'register' function with the form values.
          // This sends the form data to our API for registration.
          register({ ...values, password2: values.password });

          // Reset the form fields to their initial values.
          actions.resetForm();

          // Set the form's submission state to 'false' to indicate that the submission has completed.
          // setSubmitting is a function that is passed to the onSubmit function by Formik.
          actions.setSubmitting(false);
        }}

        // Render the form component.
        component={(props) => (
          <RegisterForm
            {...props}
          // The 'props' being passed to 'RegisterForm' typically include:
          // - Field values (e.g., username, first_name, last_name, email, password) from the form.
          // - Form control functions (e.g., handleChange, handleBlur) to manage form interactions.
          // - Submission-related functions (e.g., handleSubmit, isSubmitting) for form submission.

          // Formik passes the following props by default:
          // - 'values': An object containing the current field values (e.g., username, first_name).
          // - 'errors': An object containing validation errors for each field.
          // - 'touched': An object indicating which fields have been touched.
          // - 'handleChange': A function to handle field value changes.
          // - 'handleBlur': A function to handle field blur events.
          // - 'handleSubmit': A function to handle form submissions.
          // - 'isSubmitting': A boolean indicating whether the form is in the process of submitting.
          // - 'isValidating': A boolean indicating whether the form is in the process of validation.
          // - 'setFieldValue': A function to set a field's value imperatively.
          // - 'setFieldTouched': A function to mark a field as touched imperatively.
          // - 'setFieldError': A function to set a field's error imperatively.
          // - 'resetForm': A function to reset the form to its initial state.
          />
        )}
      ></Formik>
    </div>
  );
};

export default Register;
