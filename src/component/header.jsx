import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const WhiteTextTypography = withStyles({
    root: {
      color: "green"
    }
  })(Typography);
function HeaderTitle() {
  return (
    <div style={{}}>
    <Container maxWidth="lg"> 
    <Box textAlign="center" m={1}>
      <div>
        <WhiteTextTypography variant="h4" gutterBottom>
            TRAVEL GUIDE
        </WhiteTextTypography>
      </div>
      <div>
        <WhiteTextTypography  variant="caption" display="block" gutterBottom>
        (Tell us the city name, we will let you know the places, food etc.)
        </WhiteTextTypography>
      </div>
      </Box>
      </Container>
   </div>
  );
}

export default HeaderTitle;
