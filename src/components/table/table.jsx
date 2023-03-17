import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableJ = () => {

    const rows = [
        {
            id: "12DFCDEZ",
            customer: "Jane Lawrence",
            phone: "+2349023453223",
            driver: "none",
            date: "02 March 2023",
            pickup: "no 43 Street gwags",
            drop: "new york street, utako",
            distance: "12km",
            amount: "4500",
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: "12DsdfDEZ",
            customer: "Jane Lawrence",
            phone: "+2349023453223",
            driver: "none",
            date: "02 March 2023",
            pickup: "no 43 Street gwags",
            drop: "new york street, utako",
            distance: "12km",
            amount: "4500",
            method: "Cash on Delivery",
            status: "active",
        },
        {
            id: "12DmlkDEZ",
            customer: "Jane Lawrence",
            phone: "+2349023453223",
            driver: "none",
            date: "02 March 2023",
            pickup: "no 43 Street gwags",
            drop: "new york street, utako",
            distance: "12km",
            amount: "4500",
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: "12DhkCDEZ",
            customer: "Jane Lawrence",
            phone: "+2349023453223",
            driver: "none",
            date: "02 March 2023",
            pickup: "no 43 Street gwags",
            drop: "new york street, utako",
            distance: "12km",
            amount: "4500",
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: "12DetCDEZ",
            customer: "Jane Lawrence",
            phone: "+2349023453223",
            driver: "none",
            date: "02 March 2023",
            pickup: "no 43 Street gwags",
            drop: "new york street, utako",
            distance: "12km",
            amount: "4500",
            method: "Cash on Delivery",
            status: "active",
        }
    ];

    return (<TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Booking ID</TableCell>
                    <TableCell className="tableCell">Customer</TableCell>
                    <TableCell className="tableCell">Phone</TableCell>
                    <TableCell className="tableCell">Driver</TableCell>
                    <TableCell className="tableCell">Pick Up</TableCell>
                    <TableCell className="tableCell">Drop Off</TableCell>
                    <TableCell className="tableCell">Distance</TableCell>
                    <TableCell className="tableCell">Amount</TableCell>
                    <TableCell className="tableCell">Payment Method</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell> {row.id}</TableCell>
                        <TableCell className="tableCell" >{row.customer}</TableCell>
                        <TableCell className="tableCell" >{row.phone}</TableCell>
                        <TableCell className="tableCell" >{row.driver}</TableCell>
                        <TableCell className="tableCell" >{row.pickup}</TableCell>
                        <TableCell className="tableCell" >{row.drop}</TableCell>
                        <TableCell className="tableCell" >{row.distance}</TableCell>
                        <TableCell className="tableCell" >{row.amount}</TableCell>
                        <TableCell className="tableCell" >{row.method}</TableCell>
                        <TableCell className="tableCell">
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                        <TableCell className="tableCell" >{row.date}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>)
}

export default TableJ
