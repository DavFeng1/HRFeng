import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Grid
      item
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item direction="column" alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Typography variant="h1"> Welcome to my website. </Typography>
        <Typography variant="h4">
          Here you'll find a series of educational math and physics simulations I've created.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
