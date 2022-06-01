import type { FC } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import Scrollbar from '../../Scrollbar';
import Label from '../../Label';

interface Transaction {
  id: string;
  trackNumber: string;
  pol: string;
  pod: string;
  eta: string;
  status: string;
}

const transactions: Transaction[] = [
    {
        id: "1113223",
        trackNumber: "53344 232523 235253",
        pol: "Cape Town",
        pod: "Tema",
        eta: "09/09/2022",
        status: "processing"
    },
    {
        id: "1113223",
        trackNumber: "53344 232523 235253",
        pol: "Cape Town",
        pod: "Tema",
        eta: "09/09/2022",
        status: "loading"
    },
    {
        id: "1113223",
        trackNumber: "53344 232523 235253",
        pol: "Cape Town",
        pod: "Tema",
        eta: "09/09/2022",
        status: "completed"
    },
    {
        id: "1113223",
        trackNumber: "53344 232523 235253",
        pol: "Cape Town",
        pod: "Tema",
        eta: "09/09/2022",
        status: "processing"
    },
    {
        id: "1113223",
        trackNumber: "53344 232523 235253",
        pol: "Cape Town",
        pod: "Tema",
        eta: "09/09/2022",
        status: "intransit"
    }
];

const getStatusLabel = (status) => {
    const map = {
        processing: {
        color: 'error',
        text: 'Canceled'
      },
      completed: {
        color: 'success',
        text: 'Completed'
      },
      loading: {
        color: 'primary',
        text: 'Pending'
      },
      intransit: {
        color: 'warning',
        text: 'In-Transit'
      }
    };
  
    const { text, color }: any = map[status];
  
    return (
      <Label color={color} sx={{ borderRadius: 0 }}>
        {text}
      </Label>
    );
  };

const FaShipmentHistory: FC = (props) => (
  <Card {...props}>
    <CardHeader title="SHIPMENT HISTORY" />
    <Scrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Tacking Number
                </TableCell>
                <TableCell>
                  POL
                </TableCell>
                <TableCell>
                  POD
                </TableCell>
                <TableCell>
                  ETA
                </TableCell>
                <TableCell>
                  Docs
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((history) => (
                <TableRow
                  hover
                  key={history.id}
                >
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      {history.trackNumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {history.pol}
                  </TableCell>
                  <TableCell>
                  {history.pod}
                  </TableCell>
                  <TableCell>
                    {history.eta}
                  </TableCell>
                  <TableCell>
                    {history.eta}
                  </TableCell>
                  <TableCell>
                    {getStatusLabel(history.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
  </Card>
);

export default FaShipmentHistory;
