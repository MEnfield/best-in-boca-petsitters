import { Box, Tab, Tabs } from "@mui/material";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderTabs: FC = () => {
  // Component variables
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Component state

  // Component effects
  useEffect(() => {
    console.log({ pathname });
  }, [pathname]);

  // Function binding
  const handleTabChange = (e: React.SyntheticEvent, newRoute: string) => {
    // console.log("changing tab: ", value);
    navigate(newRoute);
  };

  return (
    <Box bgcolor="tertiary.main" p={(theme) => theme.spacing(1, 2, 0, 2)}>
      <Tabs
        value={pathname}
        onChange={handleTabChange}
        sx={{
          "& .MuiTab-root": {
            color: "secondary.main",
          },
          "& .Mui-selected": {
            fontSize: 18,
            fontWeight: "bold",
            color: "primary.main",
          },
        }}
      >
        <Tab label="Services" value="/" />
        <Tab label="About Me" value="/about" />
        <Tab label="Testimonials" value="/testimonials" />
        <Tab label="Pet Gallery" value="/gallery" />
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
