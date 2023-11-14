import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';



export default function MenuListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const navigate = useNavigate();


    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    const handleHomeRoute = (event, index) => {
        setSelectedIndex(index);
        navigate('/')
    }
    

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            maxWidth: 160,
            bgcolor: 'background.paper',
            display: {xs: 'none', sm:'none', md:"block", lg: "block"}
        }}>
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
    );
}