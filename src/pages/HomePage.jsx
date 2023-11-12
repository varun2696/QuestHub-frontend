import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


import MenuListItem from '../components/MenuListItem';
import { Button, Toolbar, Typography } from '@mui/material';
import QuestionCard from '../components/QuestionCard';
import RightCardHome from '../components/RightCardHome';



const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));

export default function HomePage() {
    return (
        <Box sx={{ flexGrow: 1, width: "82vw", m: 'auto', mt: 2 }}>
            <Grid container spacing={1}>
                <Grid xs="auto">
                    <Item>
                        <MenuListItem />
                    </Item>
                </Grid>
                <Grid xs={7}>
                    <Item>
                        <Box sx={{ height: '100vh' }}>
                            <Toolbar sx={{ width: "auto" }}>
                                <Typography
                                    variant="h5"
                                    sx={{ mr: 'auto' }}
                                >
                                    Top Questions
                                </Typography>
                                <Button variant="contained">
                                    Ask Question
                                </Button>
                            </Toolbar>
                            <Box
                                sx={{
                                    // border:"1px solid",
                                    m: 'auto',
                                    mt: 8
                                }}
                            >
                                <QuestionCard />
                                <QuestionCard />
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                <Grid xs="auto">
                    <RightCardHome/>
                </Grid>
            </Grid>
        </Box>
    );
}