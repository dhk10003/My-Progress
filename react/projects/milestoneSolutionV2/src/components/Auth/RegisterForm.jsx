import React from "react";
import { Form } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Spinner } from "flowbite-react";
import { registerIcon } from "../../helper/iconData";

// This is our schema for the registration form

// This is how we define a Yup validation schema for user registration:

export const registerSchema = Yup.object().shape({
  // Validation rule for 'username':
  username: Yup.string()
    .max(10, "Username must have fewer than 10 characters") // Maximum length constraint.
    .required("Username is required"), // Mandatory field constraint.

  // Validation rule for 'first_name':
  first_name: Yup.string()
    .max(20, "First name must have fewer than 20 characters") // Maximum length constraint.
    .required("First name is required"), // Mandatory field constraint.

  // Validation rule for 'last_name':
  last_name: Yup.string()
    .max(20, "Last name must have fewer than 20 characters") // Maximum length constraint.
    .required("Last name is required"), // Mandatory field constraint.

  // Validation rule for 'email':
  email: Yup.string()
    .email("Please enter a valid email address") // Email format validation.
    .required("Email is mandatory"), // Mandatory field constraint.

  // Validation rule for 'password':
  password: Yup.string()
    .required("Password is mandatory") // Mandatory field constraint.
    .min(8, "Password must have a minimum of 8 characters") // Minimum length constraint.
    .max(16, "Password must have a maximum of 16 characters") // Maximum length constraint.
    .matches(/\d+/, "Password must include at least one number") // Include at least one numeric character.
    .matches(/[a-z]+/, "Password must include at least one lowercase letter") // Include at least one lowercase letter.
    .matches(/[A-Z]+/, "Password must include at least one uppercase letter") // Include at least one uppercase letter.
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must include at least one special character") // Include at least one special character.
});

// Explanation of the above code:

// - This code defines a validation schema using Yup, a library for schema validation.
// - The schema is intended for user registration and enforces various constraints on user input.
// - Each field (e.g., username, first_name) is associated with specific validation rules.
// - Validation rules include constraints on maximum and minimum lengths, required fields,
//   email format, and password complexity.
// - These rules ensure that user registration input adheres to specific criteria and help prevent
//   invalid or incomplete data from being submitted.

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  const { loading } = useSelector(state => state.auth);
  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}>
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              {registerIcon}
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 dark:text-white">
                  SIGN UP
                </h1>
                <p>Enter your information to sign up</p>
              </div>
              <Form>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        name="first_name"
                        id="firstName"
                        className={
                          touched.first_name && Boolean(errors.first_name)
                            ? "input border-red-600"
                            : "input border-gray-300"
                        }
                        placeholder="Anthony"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      class="mt-2 text-sm text-red-500 dark:text-red-400">
                      {touched.first_name && errors.first_name}
                    </p>
                  </div>

                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className={
                          touched.last_name && Boolean(errors.last_name)
                            ? "input border-red-600"
                            : "input border-gray-300"
                        }
                        placeholder="Harold"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      class="mt-2 text-sm text-red-500 dark:text-red-400">
                      {touched.last_name && errors.last_name}
                    </p>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Username
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        name="username"
                        id="userName"
                        className={
                          touched.username && Boolean(errors.username)
                            ? "input border-red-600"
                            : "input border-gray-300"
                        }
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      class="mt-2 text-sm text-red-500 dark:text-red-400">
                      {touched.username && errors.username}
                    </p>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={
                          touched.email && Boolean(errors.email)
                            ? "input border-red-600"
                            : "input border-gray-300"
                        }
                        placeholder="anthoynharold@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      class="mt-2 text-sm text-red-500 dark:text-red-400">
                      {touched.email && errors.email}
                    </p>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Image</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-box-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="url"
                        name="image"
                        id="image"
                        className={"input border-gray-300"}
                        placeholder="https://www.example.com"
                        value={values.image}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Bio</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-details text-gray-400 text-lg" />
                      </div>
                      <input
                        type="textarea"
                        name="bio"
                        id="bio"
                        className={"input border-gray-300"}
                        placeholder="Your bio write here..."
                        value={values.bio}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">City</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-home-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className={"input border-gray-300"}
                        placeholder="Your city write here..."
                        value={values.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className={
                          touched.password && Boolean(errors.password)
                            ? "input border-red-600"
                            : "input border-gray-300"
                        }
                        placeholder="************"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <p
                      id="helper-text-explanation"
                      class="mt-2 text-sm text-red-500 dark:text-red-400">
                      {touched.password && errors.password}
                    </p>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      {!loading ? (
                        "Sign Up"
                      ) : (
                        <>
                          <Spinner size="sm" light={true} />

                          <span className="ml-2">Loading ...</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
