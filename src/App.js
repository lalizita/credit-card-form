import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Box, Flex, Text } from 'rebass';
function App({route}) {
  console.log("ROUTE", route)
  return (
    <Box
      sx={{
        maxWidth: 512,
        mx: 'auto',
        px: 3,
      }}>
    {renderRoutes(route.routes)}
  </Box>
  );
}

export default App;
