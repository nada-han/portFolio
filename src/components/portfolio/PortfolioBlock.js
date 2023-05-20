import React from 'react';
import { Box } from "@mui/material";
import Typical from 'react-typical';


function PortfolioBlock(props) {
   const { image, title } = props;
   return (
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
         <Box sx={{ width: '400px' }}>
            <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
         </Box>
         <h6 style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            <Typical steps={[title, 2000]} loop={Infinity} wrapper="span" />
         </h6>
      </Box>
   );
}

export default PortfolioBlock;
