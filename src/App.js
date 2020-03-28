import React from 'react';
import { Box, Flex, Text } from 'rebass';
function App() {
  return (
    <Box
      sx={{
        maxWidth: 512,
        mx: 'auto',
        px: 3,
      }}>
    <Flex
      flexDirection='column'
      px={2}
      alignItems='center'>
      <Text p={2} fontWeight='bold'>FORMIK, THEMING AND ROUTE STUDIES</Text>
    </Flex>
  </Box>
  );
}

export default App;
