import type { FC } from 'react';
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from '@material-ui/core';
import RedNotificationIcon from '../../../icons/farmgate/RedNotification'
import BlueNotificationIcon from '../../../icons/farmgate/BlueNotification'

interface Notification {
  id: string;
  status: string;
  content: string;
  counts: number
}

const notifications: Notification[] = [
  {
    id: 'b91cbe81ee3efefba6b915a7',
    status: "red",
    content: 'Messages',
    counts: 63
  },
  {
    id: 'de0eb1ac517aae1aa57c0b7e',
    status: "blue",
    content: 'Documents to complete',
    counts: 19
  },
  {
    id: '38e2b0942c90d0ad724e6f40',
    status: "red",
    content: 'Claims',
    counts: 63
  },
  {
    id: '467505f3356f25a69f4c4890',
    status: "red",
    content: 'Payments cleared',
    counts: 63
  },
];

const FaNotifications: FC = (props) => (
  <Card {...props}>
    <CardHeader title="NOTIFICATIONS" />
    <List disablePadding>
      {notifications.map((notification, index) => (
        <Box key={notification.id}>
          <ListItem>
            <ListItemAvatar>
                {notification.status === "red" ? <RedNotificationIcon /> : <BlueNotificationIcon />}
            </ListItemAvatar>
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
                {notification.content}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
            color="textSecondary"
            variant="caption"
            >
            {notification.counts}
            </Typography>
          </ListItem>
        </Box>
      ))}
    </List>
  </Card>
);

export default FaNotifications;
