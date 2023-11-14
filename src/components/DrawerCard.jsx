import React from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from "react-router-dom";



const drawerWidth = 240;

const DrawerCard = (props) => {
    const { window } = props;
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    const handleHomeRoute = (event, index) => {
        setSelectedIndex(index);
        navigate('/')
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', lg:'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ my: 2 }}>
                            MUI
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
            </nav>
        </>
    )
}

export default DrawerCard
