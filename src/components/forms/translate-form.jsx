import { Field, Formik } from "formik";

import { DoubleDropdown, InputTextArea } from "../common";

export const TranslateForm = () => {
  return (
    <Formik
      initialValues={{ fromLang: "English", toLang: "Swati" }}
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
      {({ values, errors, touched, handleSubmit }) => (
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <Field
            component={DoubleDropdown}
            options={[
              { name: "English" },
              { name: "Afrikaans" },
              {
                name: "Zulu",
              },
              { name: "Xhosa" },
            ]}
          />
          <Field component={InputTextArea} language={values?.fromLang} />
          {errors.fromLang && touched.fromLang && errors.fromLang}
        </form>
      )}
    </Formik>
  );
};
