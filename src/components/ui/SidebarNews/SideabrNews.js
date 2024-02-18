const { Box } = require("@mui/material");
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import topNews from "@/assets/engineer.jpg";
import topNews2 from "@/assets/robot.jpg";
import t2 from "@/assets/i2.jpg";
import t3 from "@/assets/i3.jpg";
import t4 from "@/assets/i4.jpg";
import t5 from "@/assets/i5.jpg";
import side from "@/assets/side.jpg";

const SideabrNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={t2} alt="topNews" width={800} />
          </CardMedia>

          <CardContent>
            <Button
              variant="contained"
              color="success"
              className="bg-blue-500 text-white my-5"
            >
              Engineering
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              Study Reveals Surprising Impact of Social Media on Mental Health:
              Experts Urge Caution
            </Typography>
            <Typography gutterBottom className="my-3">
              By TH-Raju - June 18 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Researchers unveil findings from a comprehensive study on social
              media usage, highlighting its multifaceted effects on mental
              well-being. With insights into both positive and negative impacts,
              experts emphasize the importance of informed engagement and
              mindful usage to safeguard mental health in the digital age.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        className="my-3"
      >
        <Grid item xs={6}>
          <Image src={t3} alt="topNews" className="w-32" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            Cutting-edge robotic technology transforms industries worldwide
          </Typography>
          <Typography variant="body2" gutterBottom>
            Mar 18 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        className="my-3"
      >
        <Grid item xs={6}>
          <Image src={t4} alt="topNews" className="w-32" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            Cutting-Edge Technological Advancements: Exploring the Latest
            Innovations in Robotics, AI, and Beyond
          </Typography>
          <Typography variant="body2" gutterBottom>
            Jun 16 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        className="my-3"
      >
        <Grid item xs={6}>
          <Image src={topNews2} alt="topNews" className="w-32" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            Revolutionizing Healthcare: How Robotics and AI are Transforming
            Medical Diagnosis and Treatment.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Apr 13 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        className="my-3"
      >
        <Grid item xs={6}>
          <Image src={t5} alt="topNews" className="w-32" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            Navigating Economic Landscapes: Insights into the Impact of Robotics
            on Labor Markets and Productivity.
          </Typography>
          <Typography variant="body2" gutterBottom>
            May 28 2024
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        className="my-3"
      >
        <Grid item xs={6}>
          <Image src={topNews} alt="topNews" className="w-32" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" gutterBottom>
            Sustainability Frontiers: Harnessing Robotics for Environmental
            Conservation and Renewable Energy Solutions.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Aug 18 2024
          </Typography>
        </Grid>
      </Grid>

      <Image
        src={side}
        alt="topNews"
        className="w-[90%] mx-auto rounded-lg h-72"
      />
    </Box>
  );
};

export default SideabrNews;
