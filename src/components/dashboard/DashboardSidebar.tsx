import { useEffect } from 'react';
import type { FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, Drawer, Typography } from '@material-ui/core';
import type { Theme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReceiptIcon from '@material-ui/icons/Receipt';
import useAuth from '../../hooks/useAuth';

import BriefcaseIcon from '../../icons/Briefcase';
import CalendarIcon from '../../icons/Calendar';
import ChatAltIcon from '../../icons/ChatAlt';
import ClipboardListIcon from '../../icons/ClipboardList';
import FolderOpenIcon from '../../icons/FolderOpen';
import MailIcon from '../../icons/Mail';
import ShareIcon from '../../icons/Share';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UsersIcon from '../../icons/Users';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Scrollbar from '../Scrollbar';
import FM_DASH_ICON from '../../icons/farmgate/Dashboard';
import FM_OVERVIEW_ICON from '../../icons/farmgate/Overview';
import FM_ORDER_ICON from '../../icons/farmgate/Orders';
import FM_CUSTOMER_ICON from '../../icons/farmgate/Customers';
import FM_CHAT_ICON from '../../icons/farmgate/Chat';
import FM_REPORTS_ICON from '../../icons/farmgate/Reports';
import FM_SHIPMENTS_ICON from '../../icons/farmgate/Shipments';
import FM_WALLET_ICON from '../../icons/farmgate/Wallet';
import FM_DOCUMENTS_ICON from '../../icons/farmgate/Documents';
import FM_TRACKING_ICON from '../../icons/farmgate/Tracking';
import FM_STATISTICS_ICON from '../../icons/farmgate/Statistics';
import FM_SETTINGS_ICON from '../../icons/farmgate/Settings';

interface DashboardSidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const sections = [
  {
    title: '',
    items: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FM_DASH_ICON fontSize="small" />
      },
      {
        title: 'Overview',
        // path: '/dashboard/overview',
        icon: <FM_OVERVIEW_ICON fontSize="small" />
      },
      {
        title: 'Orders',
        // path: '/dashboard/orders',
        icon: <FM_ORDER_ICON fontSize="small" />
      },
      {
        title: 'Customers',
        // path: '/dashboard/customers',
        icon: <FM_CUSTOMER_ICON fontSize="small" />
      },
      {
        title: 'Chat',
        // path: '/dashboard/chat',
        icon: <FM_CHAT_ICON fontSize="small" />
      },
      {
        title: 'Reports',
        // path: '/dashboard/reports',
        icon: <FM_REPORTS_ICON fontSize="small" />
      },
      {
        title: 'Shipments',
        // path: '/dashboard/shipments',
        icon: <FM_SHIPMENTS_ICON fontSize="small" />
      },
      {
        title: 'Wallet',
        // path: '/dashboard/wallet',
        icon: <FM_WALLET_ICON fontSize="small" />
      },
      {
        title: 'Documents',
        // path: '/dashboard/documents',
        icon: <FM_DOCUMENTS_ICON fontSize="small" />
      },
      {
        title: 'Tracking',
        // path: '/dashboard/tracking',
        icon: <FM_TRACKING_ICON fontSize="small" />
      },
      {
        title: 'Statistics',
        // path: '/dashboard/wallet',
        icon: <FM_STATISTICS_ICON fontSize="small" />
      }
    ]
  },
  // {
  //   title: 'Management',
  //   items: [
  //     {
  //       title: 'Customers',
  //       path: '/dashboard/customers',
  //       icon: <UsersIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/customers'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/customers/1'
  //         },
  //         {
  //           title: 'Edit',
  //           path: '/dashboard/customers/1/edit'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Products',
  //       path: '/dashboard/products',
  //       icon: <ShoppingCartIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/products'
  //         },
  //         {
  //           title: 'Create',
  //           path: '/dashboard/products/new'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Orders',
  //       icon: <FolderOpenIcon fontSize="small" />,
  //       path: '/dashboard/orders',
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/orders'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/orders/1'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Invoices',
  //       path: '/dashboard/invoices',
  //       icon: <ReceiptIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'List',
  //           path: '/dashboard/invoices'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/invoices/1'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Platforms',
  //   items: [
  //     {
  //       title: 'Projects',
  //       path: '/dashboard/projects',
  //       icon: <BriefcaseIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Browse',
  //           path: '/dashboard/projects/browse'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/projects/1'
  //         },
  //         {
  //           title: 'Create',
  //           path: '/dashboard/projects/new'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Social',
  //       path: '/dashboard/social',
  //       icon: <ShareIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Profile',
  //           path: '/dashboard/social/profile'
  //         },
  //         {
  //           title: 'Feed',
  //           path: '/dashboard/social/feed'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Apps',
  //   items: [
  //     {
  //       title: 'Kanban',
  //       path: '/dashboard/kanban',
  //       icon: <ClipboardListIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Mail',
  //       path: '/dashboard/mail',
  //       icon: <MailIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Chat',
  //       path: '/dashboard/chat',
  //       icon: <ChatAltIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Calendar',
  //       path: '/dashboard/calendar',
  //       icon: <CalendarIcon fontSize="small" />
  //     }
  //   ]
  // }
];

const settingsSections = [
  {
    title: '',
    items: [
      {
        title: 'Settings',
        // path: '/settings',
        icon: <FM_SETTINGS_ICON fontSize="small" />
      }
    ]
  }
];

const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { user } = useAuth();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.white',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                cursor: 'pointer',
                height: 48,
                width: 48
              }}
            />
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                Sierra Ferguson
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Oxc674fe308...
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {settingsSections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        {/* <Divider />
        <Box sx={{ p: 2 }}>
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            Need Help?
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Check our docs
          </Typography>
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            sx={{ mt: 2 }}
            to="/docs"
            variant="contained"
          >
            Documentation
          </Button>
        </Box> */}
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
