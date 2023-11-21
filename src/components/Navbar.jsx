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

import {
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';

import { Link as LinkRoute } from 'react-router-dom'
// import { Button } from '@mui/material';
import Button from '@mui/joy/Button';
import DrawerCard from './DrawerCard';
import { Avatar } from '@mui/joy';
import { useSelector } from 'react-redux';


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
    [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(1),
        width: '40vw',
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: '50vw',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(6),
        width: '60vw',
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
        [theme.breakpoints.up('xs')]: {
            width: '20ch',
        },
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
        },
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
        [theme.breakpoints.up('lg')]: {
            width: '70ch',
        },
    },
}));

const authToken = sessionStorage.getItem('authToken') || null
const drawerWidth = 240;

export default function Navbar(props) {
    const { window } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [isLogin, setIsLogin] = React.useState(false)



    {/* ============ for drawer  ====================  */ }
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleHomeRoute = (event, index) => {
        setSelectedIndex(index);
        navigate('/')
    }
    const container = window !== undefined ? () => window().document.body : undefined;
    {/* ============ for drawer end ====================  */ }



    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        sessionStorage.removeItem('authToken')
        setIsLogin(false);
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
                    <Avatar />
                </IconButton>
            </MenuItem>
            <MenuItem>
                <Button
                    onClick={handleLogout}
                    variant="plain">Logout</Button>
            </MenuItem>
        </Menu>
    );



    function handleLogout() {
        sessionStorage.removeItem('authToken');
        setIsLogin(false);
    }

    React.useEffect(() => {
        if (authToken) {
            setIsLogin(true)
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 1, minWidth: "100vw", m: 'auto', mb: 8.2 }}>
            <AppBar position="fixed"
                sx={{
                    bgcolor: "#fff",
                }}
            >
                <Toolbar sx={{
                    minWidth: { lg: "80vw", md: "85vw", sm: "95vw", xs: "100vw" },
                    m: "auto",
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
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

                    <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
                        {isLogin ? (
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={handleProfileMenuOpen}
                            >
                                <Avatar />
                            </IconButton>
                        ) : (
                            <LinkRoute to={'/signup'}>
                                <Button size='md' variant="outlined">Sign Up</Button>
                            </LinkRoute>
                        )}
                    </Box>
                    <Box sx={{ pr: 5, display: { xs: 'flex', md: 'none', lg: 'none' } }}>
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
                                <Avatar />
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

            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Box onClick={handleDrawerToggle}>
                    <Typography variant="h6" sx={{ my: 2, pl: 6 }}>
                        QuestHub
                    </Typography>
                    <Divider />

                    <List component="nav" aria-label="main mailbox folders" >
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleHomeRoute(event, 0)}
                        >
                            <ListItemIcon >
                                <HomeIcon sx={{ pl: 2 }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>

                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleHomeRoute(event, 1)}
                        >
                            <ListItemIcon>
                                <QuestionAnswerIcon sx={{ pl: 2 }} />
                            </ListItemIcon>
                            <ListItemText primary="Questions" />
                        </ListItemButton>

                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemIcon>
                                <LocalOfferIcon sx={{ pl: 2 }} />
                            </ListItemIcon>
                            <ListItemText primary="Tags" />
                        </ListItemButton>
                    </List>

                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemIcon>
                                <BookmarkIcon sx={{ pl: 2 }} />
                            </ListItemIcon>
                            <ListItemText primary="Saves" />
                        </ListItemButton>

                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <ListItemIcon>
                                <PeopleAltIcon sx={{ pl: 2 }} />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>

                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <ListItemIcon>
                                <WorkIcon sx={{ pl: 2 }} />
                            </ListItemIcon>
                            <ListItemText primary="Companies" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
            {/* <DrawerCard /> */}
        </Box>
    );
}



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