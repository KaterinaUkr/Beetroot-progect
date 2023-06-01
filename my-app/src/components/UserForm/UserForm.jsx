import { useContext, useRef, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { UserContext } from "../../context/user.context";

const defaultFormValue = {
	firstName: '',
	lastName: '',
	age: '',
}

// export const UserForm = () => {
// 	const [formValue, setFormValue] = useState(defaultFormValue);
// 	const { setUser } = useContext(UserContext);

export const UserForm = () => {
	const [formValue, setFormValue] = useState(user);
	const { user, setUser } = useContext(UserContext);
	const firstInput = useRef();

	const inputChangeHandler = (value, formControlName) => {
		setFormValue((state) => ({ ...state, [formControlName]: value }));
		// console.log(formValue)
	};

	const submitHandler = (event) => {
		console.log(event)
		event.preventDefault();
		setUser(formValue);
		setFormValue(defaultFormValue);
	}

	return (
	
		<Form onSubmit={submitHandler}>
			<input ref={firstInput} type="text" placeholder="Some placeholder"></input>
			
			
			<Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" onChange={({ target: { value } }) => inputChangeHandler(value, 'firstName')} value={formValue.firstName}/>        
			</Form.Group>
			
		{/* <div className="mb-3">
			<label>First Name
				<input
					onChange={({ target: { value } }) => inputChangeHandler(value, 'firstName')}
					value={formValue.firstName}
					type="text"
					placeholder="Enter First Name" />
			</label>
		</div> */}
			
			<Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" onChange={({ target: { value } }) => inputChangeHandler(value, 'lastName')} value={formValue.lastName}/>        
			</Form.Group>

			<Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" onChange={({ target: { value } }) => inputChangeHandler(value, 'age')} value={formValue.age}/>        
			</Form.Group>
		
		<Button type="submit" >Save</Button>

	</Form>
	);
	
};
