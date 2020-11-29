// import React from 'react'
// import Container from 'react-bootstrap/Container'
// import NavBar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'

// export default function Navigation () {
//   return (
//     <Container className='p-0' fluid>
//       <NavBar className='shadow-lg mb-3' collapseOnSelect bg='dark' variant='dark' expand='lg'>
//         <NavBar.Brand href='/home'>ReciclApp</NavBar.Brand>
//         <NavBar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />
//         <NavBar.Collapse id='responsive-navbar-nav'>
//           <Nav className='ml-auto'>
//             <Nav.Link href='/home'>Home</Nav.Link>
//             <Nav.Link href='/nosotros'>Nosotros</Nav.Link>
//             <Nav.Link href='/contacto'>Contacto</Nav.Link>
//           </Nav>
//         </NavBar.Collapse>
//       </NavBar>
//     </Container>
//   )
// }

import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, MenuItem, MenuList } from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },
  title: {
    flexGrow: 1
  }

}))

export default function NavBar () {
  const classes = useStyles()

  return (
    <div className='App'>
      <AppBar position='sticky' style={{ backgroundColor: 'green' }}>
        <Toolbar>
          <IconButton aria-label='app' color='inherit'>
            <Menu>
              <MenuItem>
                <MenuList>
                Nosotros
                </MenuList>
              </MenuItem>
            </Menu>
          </IconButton>
          <Typography variant='h6' className={classes.title}>ECO RESUELTO</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>

              <SearchIcon />

            </div>
            <InputBase
              placeholder='Buscar comercio...'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

        </Toolbar>
      </AppBar>
    </div>
  )
}
