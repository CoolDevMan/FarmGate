import type { FC } from 'react';
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  Typography,
  Divider
} from '@material-ui/core';
import BellIcon from '../../../icons/Bell';

interface Transaction {
  id: string;
  title: string;
  number: string;
}

const transactions: Transaction[] = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    title: "Dakar Fruits",
    number: "R 200 220"
  },
  {
    id: 'de0eb1ac517aae1aa57c0b7e',
    title: "Fresh Fruits",
    number: "RT 03lsdf"
  },
  {
    id: '38e2b0942c90d0ad724e6f40',
    title: "Farm Fruits",
    number: "R 200 220"
  },
  {
    id: '467505f3356f25a69f4c4890',
    title: "Sunfresh Fruits",
    number: "R595 110"
  },
  {
    id: '38e2b0942c90d0ad724e6f40',
    title: "Dakar Fruits",
    number: "R 200 220"
  }
];

const FaRecentTransactions: FC = (props) => (
  <Card {...props}>
    <CardHeader title="RECENT TRANSACTIONS" />
    <Divider />
    <List disablePadding sx={{ mt: 2 }}>
      {transactions.map((transaction, index) => (
        <Box key={transaction.id}>
          <ListItem>
            <Typography
                color="textSecondary"
                sx={{
                    overflow: 'hidden',
                    pr: 2,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}
                variant="body2"
                >
                {transaction.title}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
            color="textSecondary"
            variant="caption"
            >
            {transaction.number}
            </Typography>
          </ListItem>
        </Box>
      ))}
    </List>
  </Card>
);

export default FaRecentTransactions;
