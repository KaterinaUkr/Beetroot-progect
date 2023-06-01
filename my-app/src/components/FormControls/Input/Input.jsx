import { forwardRef } from "react"


export const Input = forwardRef({label, ...props}, ref) => ( 
	<Form.Group className="mb-3" >
		<Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" onChange={({ target: { value } }) => inputChangeHandler(value, 'firstName')} value={formValue.firstName}/>        
	</Form.Group>
)