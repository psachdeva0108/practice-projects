import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";4
export default function MuiTable(){
    return(
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                        key={row.id}
                        sx = {{'&:last-child, &:last-child th' : {border: 0}}}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
const tableData=[
        {
  "id": 1,
  "first_name": "Lemmie",
  "last_name": "Lewins",
  "email": "llewins0@google.co.jp",
  "gender": "Male",
  "ip_address": "176.162.99.160"
}, {
  "id": 2,
  "first_name": "Rodge",
  "last_name": "Vlasyuk",
  "email": "rvlasyuk1@java.com",
  "gender": "Male",
  "ip_address": "170.80.155.132"
}, {
  "id": 3,
  "first_name": "Olympie",
  "last_name": "Curnnokk",
  "email": "ocurnnokk2@bing.com",
  "gender": "Female",
  "ip_address": "141.109.93.24"
}, {
  "id": 4,
  "first_name": "Hamnet",
  "last_name": "Woodhams",
  "email": "hwoodhams3@booking.com",
  "gender": "Male",
  "ip_address": "141.121.242.26"
}, {
  "id": 5,
  "first_name": "Catina",
  "last_name": "Granleese",
  "email": "cgranleese4@google.ca",
  "gender": "Female",
  "ip_address": "140.173.99.127"
}, {
  "id": 6,
  "first_name": "Jackson",
  "last_name": "Brunone",
  "email": "jbrunone5@tamu.edu",
  "gender": "Male",
  "ip_address": "150.90.95.225"
}, {
  "id": 7,
  "first_name": "Michale",
  "last_name": "Grenter",
  "email": "mgrenter6@woothemes.com",
  "gender": "Male",
  "ip_address": "240.172.0.149"
}, {
  "id": 8,
  "first_name": "Arlin",
  "last_name": "Eich",
  "email": "aeich7@spiegel.de",
  "gender": "Male",
  "ip_address": "196.15.70.151"
}, {
  "id": 9,
  "first_name": "Karla",
  "last_name": "McCarter",
  "email": "kmccarter8@hud.gov",
  "gender": "Female",
  "ip_address": "229.69.182.207"
}, {
  "id": 10,
  "first_name": "Zak",
  "last_name": "Slyne",
  "email": "zslyne9@godaddy.com",
  "gender": "Male",
  "ip_address": "201.37.237.58"
}
]
