import { Box, Grid } from "@mui/material";
import { createContext, FC } from "react";
import HeaderContainer from "./Header/HeaderContainer";

export const AppContext: React.Context<any> = createContext(null);

const AppContainer: FC = () => {
  // Component variables
  const appValue = {
    phoneNumber: 5616742378,
    phoneNumberText: "(561) 674-2378",
  };

  // Component state

  // Component effects

  // Function binding

  return (
    <AppContext.Provider value={appValue}>
      <Box>
        <Grid container direction="column">
          <Grid item>
            <HeaderContainer />
          </Grid>
        </Grid>
      </Box>
    </AppContext.Provider>
  );
};

export default AppContainer;
