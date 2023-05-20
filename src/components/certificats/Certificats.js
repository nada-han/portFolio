import React from 'react';
import { Grid } from '@material-ui/core';
import { info } from "../../info/Info";

const Certificats = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '0 20px' }}>
      <div>
        <h2>Mes Certificats</h2>
        <Grid container spacing={2}>
          {info.certificateImages.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <img src={image} alt={`Certificat ${index + 1}`} style={{ width: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Certificats;
