import type { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import GreenUp from '../../../icons/farmgate/GreenUp';
import RedDown from '../../../icons/farmgate/RedDown';

interface FaDashboardGrowProps {
  title: string;
  value: number;
  proValue: number;
  isUp: boolean;
}

const FaDashboardGrow: FC<FaDashboardGrowProps> = (props) => {
  const { title, value, proValue, isUp } = props;

  return (
    <Card {...props}>
      <CardContent>
        <Box>
          <Typography
            color="textPrimary"
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            { title ? title : "" }
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography
            color={isUp ? "#2ED47A" : "#F7685B"}
            variant="h1"
          >
            { value }
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flex: 1,
            }}
          >
            <Box sx={{ ml: 1 }}>
              { isUp ? <GreenUp /> : <RedDown /> }
              <Typography
                color="textPrimary"
                sx={{ fontSize: 12 }}
              >
                { proValue }% than last week
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
};

export default FaDashboardGrow;
