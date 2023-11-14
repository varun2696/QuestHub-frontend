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
import axios from 'axios';
import { base_url } from '../api';
import { Button } from '@mui/joy';


const getQuestions = async () => {
    return await axios.get(`${base_url}/questions`)
}

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
}));


export default function HomePage() {
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
            // width: { xs: "95vw", sm: '92vw', md: "90vw", lg: "80vw" },
            width: { lg: "80vw", md: "95vw", sm: '98vw', xs: "100vw", },
            m: 'auto',
        }}>
            <Grid container spacing={1} m={'auto'}>
                <Grid xs={'auto'}>
                    <Item>
                        <MenuListItem />
                    </Item>
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={7}>
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

                <Grid md={3} lg={2.5}>
                    <RightCardHome />
                </Grid>
            </Grid>
        </Box>
    );
}

