import * as React from 'react';

import { Box, List, Link, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  menuSliderContainer: {
    padding: '1em',
  },
});

const listItems = [
  {
    listText: 'Home',
    listHref: '/',
  },
  {
    listText: 'Projects',
    listHref: '/blochSphere',
  },
  {
    listText: 'test',
    listHref: '/test',
  },
  {
    listText: 'Contact',
    listHref: '/contact',
  },
];

const SideBar = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.menuSliderContainer} component="div">
        <List>
          {listItems.map((listItem, index) => (
            <ListItem button key={index}>
              <Link href={listItem.listHref}>
                <ListItemText primary={listItem.listText} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};
export default SideBar;
