import type { FC } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Toolbar, Typography, TextField, InputAdornment, Divider } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import type { AppBarProps } from '@material-ui/core';

import MenuIcon from '../../icons/Menu';
import SearchIcon from '../../icons/Search';
import NotificationsPopover from './NotificationsPopover';

interface DashboardNavbarProps extends AppBarProps {
  onSidebarMobileOpen?: () => void;
}

const DashboardNavbarRoot = experimentalStyled(AppBar)(
  ({ theme }) => (
    {
      ...(
        theme.palette.mode === 'light' && {
          backgroundColor: theme.palette.primary.main,
          boxShadow: 'none',
          color: theme.palette.primary.contrastText
        }
      ),
      ...(
        theme.palette.mode === 'dark' && {
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none'
        }
      ),
      zIndex: theme.zIndex.drawer + 100
    }
  )
);

const DashboardNavbar: FC<DashboardNavbarProps> = (props) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64, backgroundColor: 'white' }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              lg: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Typography
          color="textPrimary"
          variant="h5"
        >
          FARMGATE
        </Typography>
        <Box sx={{ width: 300, marginLeft: 30 }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            placeholder="Search shipment"
            size="small"
            variant="standard"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2
          }}
        />
        <Box sx={{ ml: 1 }}>
          <NotificationsPopover />
        </Box>
      </Toolbar>
      <Divider sx={{ backgroundColor: '#EBEFF2' }} />
    </DashboardNavbarRoot>
  );
};

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
};

export default DashboardNavbar;
