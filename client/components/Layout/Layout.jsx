import {
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar";


export const DefaultLayout = ({
  children,
}) => {
  return (
    <Box>
      <Grid templateColumns={"repeat(24,1fr)"}>
        <GridItem  colSpan={2} />

        <GridItem colSpan={20} mr='2%'>
          <Navbar />
          {children}
        </GridItem>
        <GridItem  colSpan={2} />

      </Grid>
    </Box>
  );
};
