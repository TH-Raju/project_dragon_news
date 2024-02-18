const { Box } = require("@mui/material");
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";

import topNews from "@/assets/tech.jpg";
import topNews2 from "@/assets/robot.jpg";
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
                  variant="contained"
                  color="error"
                  className="bg-red-500 text-white my-5"
                >
                  Technology
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
                <Image src={topNews2} alt="topNews" width={800} />
              </CardMedia>

              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  className="bg-red-500 text-white my-5"
                >
                  Technology
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
                <Image src={topNews2} alt="topNews" width={800} />
              </CardMedia>

              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  className="bg-red-500 text-white my-5"
                >
                  Technology
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
                <Image src={topNews2} alt="topNews" width={800} />
              </CardMedia>

              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  className="bg-red-500 text-white my-5"
                >
                  Technology
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
      </Grid>
    </Box>
  );
};

export default LatestNews;
