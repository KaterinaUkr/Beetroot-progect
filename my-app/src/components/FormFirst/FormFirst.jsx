import React from 'react';
import { useField, Form, Formik, RadioGroup } from "formik";
import * as Yup from 'yup';
// import { useFormik, ErrorMessage, Field } from "formik";


// const validate = values => {
//    const errors = {};
//    if (!values.firstName) {
//      errors.firstName = 'Required';
//    } else if (values.firstName.length > 20) {
//      errors.firstName = 'Must be 15 characters or less';
//    }
 
//    if (!values.lastName) {
//      errors.lastName = 'Required';
//    } else if (values.lastName.length > 20) {
//      errors.lastName = 'Must be 20 characters or less';
//    }
 
//    if (!values.email) {
//      errors.email = 'Required';
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }
 
//    return errors;
//  };


 const MyTextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };
 
 const MyCheckbox = ({ children, ...props }) => {
   // React treats radios and checkbox inputs differently from other input types: select and textarea.
   // Formik does this too! When you specify `type` to useField(), it will
   // return the correct bag of props for you -- a `checked` prop will be included
   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
   const [field, meta] = useField({ ...props, type: 'checkbox' });
   return (
     <div>
       <label className="checkbox-input">
         <input type="checkbox" {...field} {...props} />
         {children}
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };
 
 const MySelect = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <div>
       <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };

export const FormFirst = () => {
			
	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

	return (
		<> 
		<h1>Registration Form</h1>
		<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					acceptedTerms: false, // added for our checkbox
					jobType: '', // added for our select
					radioButtonValue: '',
					phoneNumber: ''
				}}	
			
			validationSchema={Yup.object({
       	firstName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       	lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
				email: Yup.string().email('Invalid email address').required('Required'),
			 	acceptedTerms: Yup.boolean()
             .required('Required')
             .oneOf([true], 'You must accept the terms and conditions.'),
				jobType: Yup.string()
             .oneOf(
               ['designer', 'development', 'product', 'other'],
               'Invalid Job Type'
             )
					.required('Required'),
				phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
     })}
			
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
				<Form>
					<MyTextInput
             label="First Name"
             name="firstName"
             type="text"
            //  placeholder="Jane"
					/> 
 					<br />

					<MyTextInput
             label="Last Name"
             name="lastName"
             type="text"             
					/>
					<br />

					<MyTextInput
             label="Email"
             name="email"
             type="email"             
					/>
					<br />

					<MyTextInput
             label="Phone Number"
             name="phoneNumber"
             type="number"             
					/>
					<br />

					<MyTextInput
             label="Birthday"
             name="date"
						type="date"     
						
					/>
					<br />

					<label>Gender</label>
					<input 						
						type="radio" 
						id="male"
						name="group" 
						value="male" 
						required
					/>
					<label htmlFor="male">Male</label>					

					<input 
						type="radio" 
						id="female"
						name="group" 
						value="female" 
					/>
					<label htmlFor="female">Female</label>
					<br />
						

           <MySelect label="Subject" name="Subject">
             <option value="">Choose option</option>
             <option value="designer">Subject 1</option>
             <option value="development">Subject 2</option>
             <option value="product">Subject 3</option>
             {/* <option value="other">Other</option> */}
					</MySelect>
					<br />
 
           {/* <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox> */}


					

				{/* <label htmlFor="firstName">First Name</label>
				<Field name="firstName" type="text"></Field>
				<ErrorMessage name="firstName"></ErrorMessage>

				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" type="text"></Field>
				<ErrorMessage name="lastName"></ErrorMessage>

				<label htmlFor="firstName">Email Address</label>
				<Field name="email" type="email"></Field>
				<ErrorMessage name="email"></ErrorMessage> */}

				<button type="submit">Submit</button>
			</Form>

		</Formik>
	</>
  );
};







// const formik = useFormik({
	// 	initialValues: {
	// 		firstName: '',
	// 		lastName: '',
	// 		email: "",
	// 	},
	// 	validationSchema: Yup.object({
  //      firstName: Yup.string()
  //        .max(20, 'Must be 20 characters or less')
  //        .required('Required'),
  //      lastName: Yup.string()
  //        .max(20, 'Must be 20 characters or less')
  //        .required('Required'),
  //      email: Yup.string().email('Invalid email address').required('Required'),
  //    }),
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
	// });
	
	// return (
	// 	const formik = useFormik({
	// 		initialValues={{firstName: '', lastName: '', email: ''}}	
			
	// 		validationSchema={Yup.object({
  //      firstName: Yup.string()
  //        .max(20, 'Must be 20 characters or less')
  //        .required('Required'),
  //      lastName: Yup.string()
  //        .max(20, 'Must be 20 characters or less')
  //        .required('Required'),
  //      email: Yup.string().email('Invalid email address').required('Required'),
  //    })}
			
	// 		onSubmit={(values, { setSubmitting }) => {
	// 			setTimeout(() => {
	// 				alert(JSON.stringify(values, null, 2));
	// 				setSubmitting(false);
	// 			}, 400);			
	// 	}}
	// 	));
			
	// 		{formik => (
	// 			<form onSubmit={formik.handleSubmit}>
	// 				<label htmlFor="firstName">First Name</label>
	// 				<input
	// 					id="firstName"
	// 					type="text"
	// 					{...formik.getFieldProps('firstName')}						
	// 				/>
	// 				{formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
			
	// 				<label htmlFor="lastName">Last Name</label>
	// 				<input
	// 					id="lastName"
	// 					type="text"
	// 					{...formik.getFieldProps('lastName')}
	// 				/>
	// 				{formik.touched.lastName && formik.errors.lastName ? ( <div>{formik.errors.lastName}</div> ) : null}

	// 				<label htmlFor="email">Email Address</label>
	// 				<input
	// 					id="email"
	// 					type="email"
	// 					{...formik.getFieldProps('email')}
	// 				/>
	// 				{formik.touched.email && formik.errors.email ? (
	// 					<div>{formik.errors.email}</div> ) : null}
	// 				<button type="submit">Submit</button>
  //   </form>
	// 	)} 
		


		// <form onSubmit={formik.handleSubmit}>
		// 	<label htmlFor="firstName">First Name</label>
    //    <input
		// 		id="firstName"
		// 		// name="firstName"
		// 		type="text"
		// 		{...formik.getFieldProps('firstName')}
		// 		// onChange={formik.handleChange}
		// 		// onBlur={formik.handleBlur}
		// 		// value={formik.values.firstName}
		// 	/>
		// 	{formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
			
		// 	 <label htmlFor="lastName">Last Name</label>
    //    <input
		// 		id="lastName"
		// 		// name="lastName"
		// 		type="text"
		// 		{...formik.getFieldProps('lastName')}
		// 		// onChange={formik.handleChange}
		// 		// onBlur={formik.handleBlur}
		// 		// value={formik.values.lastName}
		// 	/>
		// 	{formik.touched.lastName && formik.errors.lastName ? ( <div>{formik.errors.lastName}</div> ) : null}

    //   <label htmlFor="email">Email Address</label>
    //   <input
    //     id="email"
    //     // name="email"
		// 		type="email"
		// 		{...formik.getFieldProps('email')}
		// 		// onChange={formik.handleChange}
		// 		// onBlur={formik.handleBlur}
    //     // value={formik.values.email}
		// 	/>
		// 	{formik.touched.email && formik.errors.email ? (
		// 		<div>{formik.errors.email}</div> ) : null}
    //   <button type="submit">Submit</button>
    // </form>
//   );
// };




// Create empty context
// const FormikContext = React.createContext({});

// // Place all of what’s returned by useFormik into context
// export const Formik = ({ children, ...props }) => {
//   const formikStateAndHelpers = useFormik(props);
//   return (
//     <FormikContext.Provider value={formikStateAndHelpers}>
//       {typeof children === 'function'
//         ? children(formikStateAndHelpers)
//         : children}
//     </FormikContext.Provider>
//   );
// };