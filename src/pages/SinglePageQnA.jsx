import { Box, Card, CardActions, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link as LinkRoute, useParams } from 'react-router-dom'

import RightCardHome from '../components/RightCardHome';
import MenuListItem from '../components/MenuListItem';
import axios from 'axios';
import { base_url } from '../api';
import { useEffect, useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AnswerCard from '../components/AnswerCard';
import { Button } from '@mui/joy';


const getQuestionbyId = async (id) => {

    try {
        // Retrieve the token
        const authToken = sessionStorage.getItem('authToken');

        // Set the authorization header with the token
        if (authToken) {
            const headers = {
                Authorization: `Bearer ${authToken}`,
            };

            // Make the GET request with the headers
            const response = await axios.get(`${base_url}/question/${id}`, { headers });
            // console.log("response", response);
            return response;
        }
        else {
            alert("Please Login")
        }
    }
    catch (error) {
        console.error('Error fetching data', error);
    }
};

const postYourAnswer = async (id, data) => {
    try {
        const authToken = sessionStorage.getItem('authToken');

        if (authToken) {
            const headers = {
                Authorization: `Bearer ${authToken}`,
            };

            const response = await axios.post(`${base_url}/question/${id}/answers`, data, { headers });
            // console.log("response", response);
            return response;
        }
        else {
            alert("Please Login")
        }
    }
    catch (error) {
        console.error('Error fetching data', error);
    }
}



const SinglePageQnA = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const [textareaValue, setTextareaValue] = useState('');


    const handlePostAnswer = () => {
        // console.log("text", textareaValue)

        const postAnswer = {
            answerText: textareaValue
        }
        postYourAnswer(id, postAnswer)
            .then(res => {
                console.log(res.data.msg)
                setTextareaValue("");
                alert(res.data.msg)
            })
            .catch(err => {
                console.log({ err });
            })
    }

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    useEffect(() => {
        getQuestionbyId(id)
            .then(res => {
                // console.log("res", res.data);
                setData(res.data)
            })
            .catch(err => {
                console.log({ err });
            })
    }, [])


    return (
        <Box sx={{
            // width: {xs: "95vw", sm:'92vw', md:"90vw", lg:"85vw"},
            width: { lg: "80vw", md: "95vw", sm: '98vw', xs: "100vw", },
            m: 'auto',
            // mt: 5,
        }}>
            <Stack direction={'row'} spacing={1}>
                <Box sx={{
                    width: "12vw",
                    border: "1px solid",
                    display:{xs:'none', sm:'none', md:'block'}
                }}>
                    <MenuListItem />
                </Box>
                <Box sx={{
                    width: "68vw",
                    border: "1px solid",
                    // height: "80vh"
                }}>
                    <Box>
                        <Stack direction={'row'} justifyContent={"space-between"} p={2}>
                            <Typography
                                variant="h6"
                                sx={{ mr: 'auto' }}
                            >
                                {/* questionTitle */}
                                {data && data?.questionTitle}
                            </Typography>
                            <LinkRoute to={'/ask-question'}>
                                <Button variant="solid">
                                    Ask Question
                                </Button>
                            </LinkRoute>
                        </Stack>
                        <Stack direction={'row'} spacing={5} p={2}>
                            <Typography>1</Typography>
                            <Typography>2</Typography>
                            <Typography>3</Typography>
                            <Typography>4</Typography>
                        </Stack>
                    </Box>
                    <Divider />
                    <Grid container spacing={2} sx={{ mt: 2, border: "0px solid" }}>
                        <Grid xs={8.4}>

                            <Card sx={{ mt: 2 }} >
                                <CardContent>
                                    <Typography variant='h6'>
                                        Description of the question:
                                    </Typography>
                                    <br />
                                    <Typography>
                                        {data && data?.questionDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Typography
                                fontSize={'1.5rem'}
                                sx={{ pb: 1, pt: 2 }}>
                                {/* 2 Answers */}
                                {data && data?.answers?.length} Answers
                            </Typography>

                            {data && data?.answers?.map((el) => {
                                return (
                                    
                                    <AnswerCard
                                    key={el._id}
                                    answerText={el.answerText}
                                    username={el.username}
                                     />
                                    // <Card sx={{ mt: 2 }} key={el._id}>
                                    //     <CardContent>
                                    //         <Typography>
                                    //             {el.answerText}
                                    //         </Typography>
                                    //     </CardContent>
                                    // </Card>
                                )
                            })}

                            <Box sx={{ mt: 8, mb: 2, }}>
                                <Card variant="outlined" >
                                    <CardContent >
                                        <Typography variant='h5' sx={{ fontWeight: 500, pb: 2 }} gutterBottom>
                                            Your Answer
                                        </Typography>
                                        <Box>
                                            <TextareaAutosize
                                                value={textareaValue}
                                                onChange={handleTextareaChange}
                                                aria-label="textarea"
                                                placeholder="Enter your text here"
                                                rows={10}
                                                style={{
                                                    minWidth: '100%',
                                                    maxWidth: "100%",
                                                    minHeight: '200px',
                                                }}
                                            />
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ ml: 1 }}>
                                        <Button
                                            variant="solid"
                                            onClick={handlePostAnswer}
                                            disabled={!textareaValue}
                                        >
                                            POST
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid xs={3.4}>
                            <RightCardHome />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    )
}

export default SinglePageQnA


// const tempGrid = (
//     <>
//         <Grid container>
//             <Grid item xs={2}>
//                 <Box sx={{ height: "62vh", border: "1px solid red" }}>
//                     1
//                 </Box>
//             </Grid>
//             <Grid container xs={10}>
//                 <Grid xs={12}>
//                     <Box sx={{ height: "10vh", border: "1px solid" }}>
//                         2
//                     </Box>
//                 </Grid>
//                 <Grid xs={8}>
//                     <Box sx={{ height: "50vh", border: "1px solid" }}>
//                         3
//                     </Box>
//                 </Grid>
//                 <Grid xs={4}>
//                     <Box sx={{ height: "50vh", border: "1px solid" }}>
//                         4
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </>
// )