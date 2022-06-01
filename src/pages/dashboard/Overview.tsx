import { useEffect } from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import {
  FaDashboardGrow,
  FaShipmentHistory,
  FaNotifications,
  FaRecentTransactions
} from '../../components/dashboard/overview';
import useSettings from '../../hooks/useSettings';
import gtm from '../../lib/gtm';

const Overview: FC = () => {
  const { settings } = useSettings();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard: Overview | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={2}
              xs={12}
            >
              <FaDashboardGrow
                title="QUOTATION REQUESTS"
                value={21}
                proValue={1.2}
                isUp
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <FaDashboardGrow
                title="CURRENT SHIPMENTS"
                value={22}
                proValue={1.2}
                isUp
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <FaDashboardGrow
                title="INVOICES TO PAY"
                value={8}
                proValue={1.2}
                isUp={false}
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <FaDashboardGrow
                title="INVOICES TO COLLECT"
                value={21}
                proValue={1.2}
                isUp={false}
              />
            </Grid>
            <Grid
              item
              md={2}
              xs={12}
            >
              <FaDashboardGrow
                title="EXCEPTION ALERT"
                value={12}
                proValue={1.2}
                isUp={false}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <FaShipmentHistory />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <FaNotifications />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <FaShipmentHistory />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <FaRecentTransactions />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Overview;
