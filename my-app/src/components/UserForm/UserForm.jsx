import { useState } from "react"
import { Button } from "react-bootstrap"

const defaultFormValue = {
	firstName: '',
	lastName: '',
	age: '',
}

export const UserForm = () => {
	const [formValue, setFormValue] = useState(defaultFormValue);

	const inputChangeHandler = (value, formControlName) => {
		setFormValue((state) => ({ ...state, [formControlName]: value }));
		// console.log(formValue)
	};

	const submitHandler = () => {
		console.log(formValue);
		setFormValue(defaultFormValue);
	}

	return (
	
	<form onSubmit={submitHandler}>
		<div className="mb-3">
			<label>First Name
				<input
					onChange={({ target: { value } }) => inputChangeHandler(value, 'firstName')}
					value={formValue.firstName}
					type="text"
					placeholder="Enter First Name" />
			</label>
		</div>
		<div className="mb-3">
			<label>Last Name
				<input
					type="text"
					placeholder="Enter Last Name"
					value={formValue.lastName}
					onChange={({ target: { value } }) => inputChangeHandler(value, 'lastName')} />
			</label>
		</div>
		<div className="mb-3">
			<label>Age
				<input
					type="number"
					placeholder="Enter Age"
					value={formValue.age}
					onChange={({ target: { value } }) => inputChangeHandler(Number(value), 'age')} />
			</label>
		</div>
		<Button type="submit" >Save</Button>

	</form>
	);
	
};
