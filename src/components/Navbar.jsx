import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import DrawerLeft from './DrawerLeft';
import { Link as LinkRoute } from 'react-router-dom'
// import { Button } from '@mui/material';
import Button from '@mui/joy/Button';
import { Avatar } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #818181",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(4),
        width: 'auto',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(8),
        width: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // border: "1px solid",
    color: '#3c3c3c',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
        [theme.breakpoints.up('lg')]: {
            width: '80ch',
        },
    },
}));



export default function Navbar() {

    const [isLogin, setIsLogin] = React.useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem >
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Avatar sx={{
                        bgcolor: "#637bfe",
                        width: 32,
                        height: 32
                    }}>
                        V
                    </Avatar>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <Button variant="plain">Logout</Button>
            </MenuItem>
        </Menu>
    );


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    return (
        <Box sx={{ flexGrow: 1, width: "100vw" }}>
            <AppBar position="static"
                sx={{
                    bgcolor: "#fff"
                }}
            >
                <Toolbar sx={{ width: "80vw", m: "auto", border: '2px solid red' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { lg: 'none' } }}
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon color='action' />
                    </IconButton>
                    <LinkRoute className='txt-dec-none' to='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            color={"#3c3c3c"}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            QuestHub
                        </Typography>
                    </LinkRoute>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color='action' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            sx={{ color: "#3c3c3c" }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {isLogin ? (
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={handleProfileMenuOpen}
                            >
                                <Avatar sx={{
                                    bgcolor: "#637bfe",
                                    width: 32,
                                    height: 32
                                }}>
                                    V
                                </Avatar>
                            </IconButton>
                        ) : (
                            <LinkRoute to={'/signup'}>
                                <Button size='md' variant="outlined">Sign Up</Button>
                            </LinkRoute>
                        )}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        {/* <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon color='action' />
                        </IconButton> */}
                        {isLogin ? (
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={handleProfileMenuOpen}
                            >
                                <Avatar sx={{
                                    bgcolor: "#637bfe",
                                    width: 32,
                                    height: 32
                                }}>
                                    V
                                </Avatar>
                            </IconButton>
                        ) : (
                            <LinkRoute to={'/signup'}>
                                <Button size='sm' variant="outlined">Sign Up</Button>
                            </LinkRoute>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <DrawerLeft
                state={state}
                toggleDrawer={toggleDrawer}
            />
        </Box>
    );
}

// export const Navbar = () => {

//     return <Box >
//         <AppBar sx={{ bgcolor: "#fff", flexGrow: 1 }}>
//             <Toolbar sx={{
//                 width: "80vw",
//                 m: "auto",
//                 // border: "1px solid red",
//             }}>
//                 <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "black" }}>
//                     QuestHub
//                 </Typography>

//                 <Search>
//                     <SearchIconWrapper>
//                         <SearchIcon color="action" />
//                     </SearchIconWrapper>
//                     <StyledInputBase
//                         placeholder="Search…"
//                         inputProps={{ 'aria-label': 'search' }}
//                     />
//                 </Search>
//             </Toolbar>
//         </AppBar>
//     </Box>
// }



// <IconButton
// size="large"
// edge="end"
// aria-label="account of current user"
// aria-controls={menuId}
// aria-haspopup="true"
// onClick={handleProfileMenuOpen}
// color="inherit"
// >
// <AccountCircle color='action' />
// </IconButton>