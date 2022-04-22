import { Box } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from 'react-responsive'

export const DefaultLayout = ({ children }) => {
  const isDesktoporLaptop = useMediaQuery({ query: "(min-width: 1000px)" });
  return (
    <Box>
      {isDesktoporLaptop ? (
        children
      ) : (
        <Box>Please use mobile app or a PC to access the platform.</Box>
      )}
    </Box>
  );
};
