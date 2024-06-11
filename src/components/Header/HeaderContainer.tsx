import { Box, Grid } from "@mui/material";
import { FC } from "react";
import HeaderTitleSection from "./HeaderTitleSection";
import HeaderTabs from "./HeaderTabs";

const HeaderContainer: FC = () => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <HeaderTitleSection />
        </Grid>
        <Grid item>
          <HeaderTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderContainer;
