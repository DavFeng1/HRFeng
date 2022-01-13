import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Link,
  ListItem,
  ListItemText,
} from '@mui/material';
import { drawerWidth } from './Layout';
import { styled } from '@mui/material/styles';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const routes = [
  {
    text: 'Home',
    to: '/#/',
  },
  {
    text: 'Projects',
    to: '/#/blochSphere',
  },
  {
    text: 'Contact',
    to: '/#/contact',
  },
];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface SideBarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const SideBar = (props: SideBarProps) => {
  return (
    <>
      <Box component="nav">
        <Drawer
          variant="persistent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          anchor="left"
          open={props.open}
        >
          <DrawerHeader>
            <IconButton onClick={props.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {routes.map((route, index) => (
              <Link href={route.to}>
                <ListItem button key={index}>
                  <ListItemText primary={route.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};
export default SideBar;
