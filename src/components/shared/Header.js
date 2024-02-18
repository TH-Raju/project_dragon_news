import { getCurrentDate } from "@/utils/getCurrentDate";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box>
      <Container className="w-full text-center">
        <Typography
          color="black"
          variant="caption"
          textAlign="center"
          fontSize="40px"
          fontWeight="bold"
          fontStyle="italic"
        >
          The Dragon News
        </Typography>
        <Typography
          color="black"
          variant="body2"
          textAlign="center"
          className="mb-3"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          color="black"
          variant="body2"
          textAlign="center"
          className="mb-3"
        >
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
