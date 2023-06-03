import './DataTableClosed.scss'; 
import { Counter } from "../Counter/Counter";
import { PropertyStatus } from './PropertyStatus/PropertyStatus';
import { Button } from 'react-bootstrap';

const data = [
	{
	property: '1694 Noble Cape',
	data: 'Fri Jun 02 2023 11:00:30 GMT+0300 (за східноєвропейським літнім часом)',
	rent: 3300,
	deposite: 6900,
	status: 1
	},
	{
	property: '1141 Tawny Maze',
	data: 'Fri Jun 02 2023 11:00:30 GMT+0300 (за східноєвропейським літнім часом)',
	rent: 2700,
	deposite: 7500,
	status: 2
	}
]

export const DataTableClosed = () => {
	return ( 
	<div className="table-closed">
		<div className="table-closed__header">
			<h3 className="table-closed__label">Closed Deposits</h3>{""}<Counter value={8}></Counter>
		</div>

		<table>
				<tr className='table-closed__head'>
					<th>Property</th>
					<th>Move in Date</th>
					<th>Rent</th>
					<th>Deposit</th>
					<th>Status</th>
				</tr>

				{
					data.map(({ property, data, rent, deposite, status }) =><tr className='table-closed__row'>
						<td>{property}</td>
						<td>{ new Date(data).toLocaleString() }</td>
						<td>${rent}</td>
						<td>${deposite}</td>
						<td><PropertyStatus status={status}></PropertyStatus></td>
				</tr>)
				}
				

		</table>
		<Button className='table-closed__btn'>ALL closed DEPOSITS</Button>

	</div>	
	)

}