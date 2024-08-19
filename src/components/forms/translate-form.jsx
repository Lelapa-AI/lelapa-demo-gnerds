import { Field, Formik } from "formik";

import { DoubleDropdown } from "../common";

export const TranslateForm = () => {
  return (
    <Formik
      initialValues={{ fromLang: "", toLang: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.fromLang) {
          errors.fromLang = "Required";
        } else if (!values.toLang) {
          errors.toLang = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field
            component={DoubleDropdown}
            options={[{ name: "English" }, { name: "Afrikaans" }]}
          />
          {errors.email && touched.email && errors.email}
        </form>
      )}
    </Formik>
  );
};
