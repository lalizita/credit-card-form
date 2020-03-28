import React from 'react'
import { routes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Box, Flex, Text } from 'rebass'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const ClientRoutes = ({ route }) => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          maxWidth: 512,
          mx: 'auto',
          px: 3
        }}
      >
        <Flex flexDirection="column" px={2} alignItems="center">
          <Text p={2} fontWeight="bold">
            FORMIK STUDIES
          </Text>
          <Box mx="auto" />
          <Link to="/credit-card">Credit Card</Link>
          <Link to="/test">Test</Link>
        </Flex>
      </Box>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

export default ClientRoutes
