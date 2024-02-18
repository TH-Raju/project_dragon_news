import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideabrNews from "@/components/ui/SidebarNews/SideabrNews";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideabrNews />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
