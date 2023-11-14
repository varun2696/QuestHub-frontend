import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Toolbar, Typography } from '@mui/material';
import { Button } from '@mui/joy';
import { Link as LinkRoute } from 'react-router-dom'
import axios from 'axios';

import MenuListItem from '../components/MenuListItem';
import RightCardHome from '../components/RightCardHome';
import AllQuestionCard from '../components/AllQuestionCard';
import { base_url } from '../api';



const getQuestions = async () => {
    return await axios.get(`${base_url}/questions`)
}



export default function AllQuestions() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        getQuestions().then(res => {
            // console.log(res.data)
            setData(res.data);
        })
            .catch(err => {
                console.log(err);
            })

    }, [])
    return (
        <Box sx={{
            flexGrow: 1,
            width: { lg: "80vw", md: "95vw", sm: '98vw', xs: "100vw", },
            m: 'auto',
        }}>
            <Grid container spacing={1} m={'auto'}>
                <Grid xs={'auto'} sx={{
                    display: { xs: 'none', sm: 'none', md: "block", lg: "block" }
                }}>

                    <MenuListItem />

                </Grid>
                <Grid xs={12} sm={12} md={6} lg={7}>
                    <Box sx={{ height: '100vh' }}>
                        <Toolbar sx={{ width: "auto", pb: 2 }}>
                            <Typography
                                mr={'auto'}
                                variant='h5'
                            >
                                All Questions
                            </Typography>
                            <LinkRoute to={'/ask-question'}>
                                <Button variant="solid"
                                >
                                    Ask Question
                                </Button>
                            </LinkRoute>
                        </Toolbar>
                        <Typography textAlign={'left'} p={3}>
                            {data && data?.length}  questions
                        </Typography>
                        <Divider />

                        <Box sx={{ m: 'auto' }}>
                            {data && data?.map((el) => {
                                return (
                                    <AllQuestionCard
                                        key={el._id}
                                        username={el.username}
                                        questionTitle={el.questionTitle}
                                        votes={el.upvotes}
                                        answers={el.answers.length}
                                        language={el.language}
                                        id={el._id}
                                        userFirstLetter={el.username[0]}
                                        questionDescription={el.questionDescription}
                                    />
                                )
                            })}
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={2} sm={2} md={3} lg={3}
                    sx={{
                        display: { xs: 'none', sm: 'none', md: "block", lg: "block" }
                    }}>
                    <RightCardHome />
                </Grid>
            </Grid>
        </Box>
    );
}

