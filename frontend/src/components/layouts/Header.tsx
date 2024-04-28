import { AppBar, Box, Button, Container, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <AppBar component="header">
      <Container
        fixed={true}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}
      >
        <Typography component="h1">
          <Link to="/" style={{ fontSize: '1.2rem', color: 'white', textDecorationLine: 'none' }}>
            Todo-List-App
          </Link>
        </Typography>

        <Box component="nav">
          <List sx={{ display: 'flex', paddingY: 0 }}>
            <ListItem>
              <Button sx={{ color: 'white' }}>アイテム</Button>
            </ListItem>
            <ListItem>
              <Button sx={{ color: 'white' }}>アイテム</Button>
            </ListItem>
          </List>
        </Box>
      </Container>
    </AppBar>
  )
}
