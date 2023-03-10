import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Head from 'next/head';

import Page from '../src/Page';
import ProTip from '../components/ProTip';

class Donations extends Page {
  getSubtitle(): string {
    return 'Donations';
  }

  render() {
    return (
      <>
        <Head>
          <title>Donations | Simply Recipes</title>
        </Head>

        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} href="https://patreon.com/SimplyRecipes">
            Go to the home page
          </Button>
        </Box>
        <ProTip/>
      </>
    );
  }
}

export default Donations;
