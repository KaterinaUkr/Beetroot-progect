import './DataTable.scss'
import { Counter } from "../Counter/Counter"
import { PropertyStatus } from './PropertyStatus/PropertyStatus';
import { Button } from 'react-bootstrap';
// import { table } from 'console'



const data = [
	{
	property: '771 Lost Round',
	data: 'Fri Jun 02 2023 11:00:30 GMT+0300 (за східноєвропейським літнім часом)',
	rent: 3000,
	deposite: 9000,
	status: 0
	},
	{
	property: '1491 Jagged Arbor',
	data: 'Fri Jun 02 2023 11:00:30 GMT+0300 (за східноєвропейським літнім часом)',
	rent: 2300,
	deposite: 4600,
	status: 2
	}
]

export const DataTable = () => {
	return ( 
	<div className="data-table">
		<div className="data-table__header">
			<h3 className="data-table__label">Active Deposits</h3>{""}<Counter value={2}></Counter>
		</div>

		<table>
				<tr className='data-table__head'>
					<th>Property</th>
					<th>Move in Date</th>
					<th>Rent</th>
					<th>Deposit</th>
					<th>Status</th>
				</tr>

				{
					data.map(({ property, data, rent, deposite, status }) =><tr className='data-table__row'>
						<td>{property}</td>
						<td>{ new Date(data).toLocaleString() }</td>
						<td>${rent}</td>
						<td>${deposite}</td>
						<td><PropertyStatus status={status}></PropertyStatus></td>
				</tr>)
				}
				

		</table>
		<Button className='data-table__btn'>ALL ACTIVE DEPOSITS</Button>

	</div>	
	)
}