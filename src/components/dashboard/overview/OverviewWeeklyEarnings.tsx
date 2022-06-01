import type { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import GreenUp from '../../../icons/farmgate/GreenUp';

const OverviewWeeklyEarnings: FC = (props) => (
  <Card {...props}>
    <CardContent>
      <Box>
        <Typography
          color="textPrimary"
          variant="h6"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          QUOTATION REQUESTS
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Typography
          color="#2ED47A"
          variant="h1"
        >
          21
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
          }}
        >
          <Box sx={{ ml: 1 }}>
            <GreenUp />
            <Typography
              color="textPrimary"
              sx={{ fontSize: 12 }}
            >
              1.2% than last week
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default OverviewWeeklyEarnings;
