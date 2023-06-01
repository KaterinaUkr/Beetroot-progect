import { Card } from "react-bootstrap"
import { UserContext } from "../../context/user.context"
import { useContext } from "react"

export const UserInfo = () => {
	const {user} = useContext(UserContext);

	return <Card>
		<h3>First Name: {user.firstName}</h3>
		<h3>Last Name: {user.lastName}</h3>
		<h3>Age: {user.age}</h3>
	</Card>
}