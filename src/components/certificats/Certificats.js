import React from 'react';
import { Grid } from '@material-ui/core';
import { info } from "../../info/Info";

const Certificats = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding: '0 0.5px' }}>
      <div>
        
        <Grid container spacing={10}>
          {info.certificateImages.map((image, index) => (
            <Grid item key={index} xs={50} sm={40} md={30} lg={3}>
              <img src={image} alt={`Certificat ${index + 1}`} style={{ width: '700%' }} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Certificats;
