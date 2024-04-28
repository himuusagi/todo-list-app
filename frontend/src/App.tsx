import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/layouts/Header'
import { Box, Container } from '@mui/material'

export default function App(): ReactElement {
  return (
    <>
      <Header />
      <Box component="main" sx={{ marginTop: '4rem' }}>
        <Container fixed={true} sx={{ paddingY: '4rem', minHeight: 'calc(100vh - 4rem)' }}>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
