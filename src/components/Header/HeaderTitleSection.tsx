import { Box, Grid, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { AppContext } from "../AppContainer";

const HeaderTitleSection: FC = () => {
  // Component variables
  const { phoneNumber, phoneNumberText } = useContext(AppContext);

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      p={2}
      bgcolor="primary.light"
      borderBottom="2px dashed"
      borderColor="primary.main"
    >
      <Grid container direction="row" alignItems="center">
        {/* Title & Subtitle */}
        <Grid item xs>
          <Box>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  fontWeight="bold"
                  color="primary.main"
                  fontSize={48}
                  fontFamily="playfair display"
                >
                  Best in Boca Pet Sitter’s
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  "& > p": {
                    display: "inline",
                  },
                }}
              >
                <Typography fontSize={20} pr={1}>
                  🐾
                </Typography>
                <Typography
                  color="secondary"
                  fontSize={24}
                  fontFamily="figma hand, pacifico"
                >
                  Going away? Call me today!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid item>
          <Box>
            <Grid container direction="column">
              <Grid item>
                <Typography color="secondary" fontSize={20} fontWeight="medium">
                  To set up an appointment, contact me
                </Typography>
              </Grid>
              <Grid item alignSelf="flex-end">
                <a
                  href={`tel:${phoneNumber}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography color="secondary" fontSize={16} fontWeight="bold">
                    {phoneNumberText}
                  </Typography>
                </a>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderTitleSection;
