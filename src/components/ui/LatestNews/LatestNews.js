const { Box } = require("@mui/material");
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

import topNews from "@/assets/tech.jpg";
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
    </Box>
  );
};

export default LatestNews;
