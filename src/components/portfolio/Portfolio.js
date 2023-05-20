import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
    return (
        <Box marginTop="8rem" display="flex" justifyContent="center">
            <Grid container spacing={2}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock image={project.image} title={project.title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
