import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Toolbar, Typography } from '@mui/material';
import { Link as LinkRoute } from 'react-router-dom'

import MenuListItem from '../components/MenuListItem';
import QuestionCard from '../components/QuestionCard';
import RightCardHome from '../components/RightCardHome';
import { Button } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../redux/questions/action';




const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));


export default function HomePage() {
    const { data } = useSelector(state => state.questionsReducer)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getQuestions)
    }, [])
    
    return (
        <Box sx={{
            flexGrow: 1,
            // width: { xs: "95vw", sm: '92vw', md: "90vw", lg: "80vw" },
            width: { lg: "80vw", md: "95vw", sm: '98vw', xs: "100vw", },
            m: 'auto',
        }}>
            <Grid container spacing={1} m={'auto'}>
                <Grid xs={'auto'} sx={{
                    display: { xs: 'none', sm: 'none', md: "block", lg: "block" }
                }}>
                    <Item>
                        <MenuListItem />
                    </Item>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={7}>
                    <Item>
                        <Box sx={{ height: '100vh' }}>
                            <Toolbar sx={{ width: "auto", pb: 6 }}>
                                <Typography
                                    mr={'auto'}
                                    variant='h5'
                                >
                                    Top Questions
                                </Typography>
                                <LinkRoute to={'/ask-question'}>
                                    <Button variant="solid"
                                    >
                                        Ask Question
                                    </Button>
                                </LinkRoute>
                            </Toolbar>

                            <Divider />

                            <Box sx={{ m: 'auto' }}>
                                {data && data?.map((el) => {
                                    return (
                                        <QuestionCard
                                            key={el._id}
                                            username={el.username}
                                            questionTitle={el.questionTitle}
                                            votes={el.upvotes}
                                            answers={el.answers.length}
                                            language={el.language}
                                            id={el._id}
                                            userFirstLetter={el.username[0]}
                                        />
                                    )
                                })}
                            </Box>
                        </Box>
                    </Item>
                </Grid>

                <Grid xs={2} sm={2} md={3} lg={3}
                    sx={{
                        display: { xs: 'none', sm: 'none', md: "block", lg: "block" }
                    }}
                >
                    <RightCardHome />
                </Grid>
            </Grid>
        </Box>
    );
}

