import { Container, Grid, Link, Button } from '@mui/material';

import * as React from 'react';

import styles from '../assets/styles/SideBar.module.css';

const SideBar = () => {
  return (
    <>
      <Container className={styles.sideBarContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Button variant="contained">
              <Link className="navLink" href="/">
                Home
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">
              <Link className="navLink" href="/snake">
                Stuff
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">
              <Link className="navLink" href="/blochSphere">
                Bloch Sphere
              </Link>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">
              <Link className="navLink" href="/contact">
                Contact
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default SideBar;
