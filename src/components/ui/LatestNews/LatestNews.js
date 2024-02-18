const { Box } = require("@mui/material");
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import topNews from "@/assets/tech.jpg";
import topNews2 from "@/assets/robot.jpg";
import t3 from "@/assets/i2.jpg";
import t4 from "@/assets/i3.jpg";
import t5 from "@/assets/i4.jpg";
import t6 from "@/assets/i5.jpg";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="topNews" width={800} />
          </CardMedia>

          <CardContent>
            <Button
              variant="contained"
              color="error"
              className="bg-red-500 text-white my-5"
            >
              Technology
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              Study Reveals Surprising Impact of Social Media on Mental Health:
              Experts Urge Caution
            </Typography>
            <Typography gutterBottom className="my-3">
              By TH-Raju - Mar 18 2024
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
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="mt-5"
      >
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="topNews" width={800} />
              </CardMedia>

              <CardContent>
                <Button
                  color="error"
                  className="bg-blue-500 text-white my-5 hover:bg-blue-900"
                >
                  Robot
                </Button>
                <Typography gutterBottom component="div">
                  Breakthrough in Robotics: AI-Powered Robots Revolutionize
                  Industries with Unprecedented Efficiency.
                </Typography>
                <Typography gutterBottom className="my-3">
                  By TH-Raju - Jan 10 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Advancements in Robotics: AI-Driven Machines Set to Transform
                  Industries, Revolutionizing Efficiency and Workflows Across
                  Sectors Worldwide.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={t4} alt="topNews" width={800} className="h-56" />
              </CardMedia>

              <CardContent>
                <Button className="bg-green-500 hover:bg-green-900 text-white my-5">
                  Universe
                </Button>
                <Typography gutterBottom component="div">
                  Breakthrough in Robotics: AI-Powered Robots Revolutionize
                  Industries with Unprecedented Efficiency.
                </Typography>
                <Typography gutterBottom className="my-3">
                  By TH-Raju - Feb 18 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Advancements in Robotics: AI-Driven Machines Set to Transform
                  Industries, Revolutionizing Efficiency and Workflows Across
                  Sectors Worldwide.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={t5} alt="topNews" width={800} className="h-56" />
              </CardMedia>

              <CardContent>
                <Button className="bg-lime-500 hover:bg-lime-900 text-white my-5">
                  Drone
                </Button>
                <Typography gutterBottom component="div">
                  Breakthrough in Robotics: AI-Powered Robots Revolutionize
                  Industries with Unprecedented Efficiency.
                </Typography>
                <Typography gutterBottom className="my-3">
                  By TH-Raju - Sep 28 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Advancements in Robotics: AI-Driven Machines Set to Transform
                  Industries, Revolutionizing Efficiency and Workflows Across
                  Sectors Worldwide.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={t3} alt="topNews" width={800} className="h-56" />
              </CardMedia>

              <CardContent>
                <Button className="bg-emerald-500 hover:bg-emerald-900 text-white my-5">
                  Programming
                </Button>
                <Typography gutterBottom component="div">
                  Breakthrough in Robotics: AI-Powered Robots Revolutionize
                  Industries with Unprecedented Efficiency.
                </Typography>
                <Typography gutterBottom className="my-3">
                  By TH-Raju - Aug 20 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Advancements in Robotics: AI-Driven Machines Set to Transform
                  Industries, Revolutionizing Efficiency and Workflows Across
                  Sectors Worldwide.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
