import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1E90FF",
        color: "white",
        padding: "16px 0",
        marginTop: "auto",
        marginLeft: "190px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Careers</Typography>
            <Link href="#" color="inherit">
              LinkedIn
            </Link><br/>
            <Link href="#" color="inherit">
              Twitter
            </Link><br/>
            <Link href="#" color="inherit">
              YouTube
            </Link><br/>
            <Link href="#" color="inherit">
              Instagram
            </Link><br/>
            <Link href="#" color="inherit">
              Facebook
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">STAR VISION's Weekly Newsletter</Typography>
            <Link href="#" color="inherit">
              Sign Up
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">&copy; 2024 STAR VISION</Typography>
            <Link href="#" color="inherit">
              Investor Login
            </Link><br/>
            <Link href="#" color="inherit">
              Sitemap
            </Link><br/>
            <Link href="#" color="inherit">
              Terms of Use
            </Link><br/>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link><br/>
            <Link href="#" color="inherit">
              Disclosures
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
