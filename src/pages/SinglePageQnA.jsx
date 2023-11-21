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
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionbyId, postYourAnswer } from '../redux/questions/action';




const SinglePageQnA = () => {

    const { id } = useParams();
    const [textareaValue, setTextareaValue] = useState('');

    const { questionById } = useSelector(state => state.questionsReducer)
    // console.log(("quest", questionById));
    const dispatch = useDispatch()

    const handlePostAnswer = () => {
        // console.log("text", textareaValue)

        const postAnswer = {
            answerText: textareaValue
        }

        dispatch(postYourAnswer(id, postAnswer))
            .then(() => {
                setTextareaValue("");
                alert("Your ANS Posted")
            })

    }

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    useEffect(() => {
        dispatch(getQuestionbyId(id))
    }, [])


    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: { lg: "80vw", md: "94vw", sm: '96vw', xs: "98vw", },
            m: 'auto',
            // border: '2px solid red'
        }}>
            <Stack direction={'row'} spacing={1}>
                <Box sx={{
                    width: { md: '17vw', lg: '13vw' },
                    // border: "1px solid",
                    display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }
                }}>
                    <MenuListItem />
                </Box>

                <Box sx={{
                    width: { lg: "70vw", md: "90vw", sm: '95vw', xs: "95vw", },
                    // border: "1px solid red",
                    // height: "80vh"
                }}>
                    <Box width={'100%'}>
                        <Stack
                            direction={'row'}
                            justifyContent={"space-between"}
                            alignItems={'center'}
                            p={2}
                        >
                            <Typography
                                variant="h5"
                                fontWeight={400}
                                sx={{
                                    mr: 'auto',
                                    pt: 1,
                                    fontSize: { lg: '2rem', md: "2rem", sm: "1.5rem", xs: "1rem" },
                                    width: "80%"
                                }}
                            >
                                {questionById && questionById?.questionTitle}
                            </Typography>
                            <LinkRoute to={'/ask-question'} sx={{ border: '2px solid' }}>
                                <Button variant="solid"  >
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

                    <Grid container spacing={1} sx={{ mt: 2, }}>
                        <Grid lg={8.4} md={8} sm={12} xs={12}>

                            <Card sx={{ mt: 2 }} >
                                <CardContent>
                                    <Typography variant='h6'>
                                        Description of the question:
                                    </Typography>
                                    <br />
                                    <Typography>
                                        {questionById && questionById?.questionDescription}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Typography
                                fontSize={'1.5rem'}
                                sx={{ pb: 1, pt: 2 }}>
                                {/* 2 Answers */}
                                {questionById && questionById?.answers?.length} Answers
                            </Typography>

                            {questionById && questionById?.answers?.map((el) => {
                                return (
                                    <AnswerCard
                                        key={el._id}
                                        answerText={el.answerText}
                                        username={el.username}
                                    />
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
                        <Grid lg={3.6} md={4}
                            sx={{
                                display: { xs: 'none', sm: 'none', md: "block", lg: "block" }
                            }}
                        >
                            <RightCardHome />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    )
}

export default SinglePageQnA





// const getQuestionbyId = async (id) => {

//     try {
//         // Retrieve the token
//         const authToken = sessionStorage.getItem('authToken');

//         // Set the authorization header with the token
//         if (authToken) {
//             const headers = {
//                 Authorization: `Bearer ${authToken}`,
//             };

//             // Make the GET request with the headers
//             const response = await axios.get(`${base_url}/question/${id}`, { headers });
//             // console.log("response", response);
//             return response;
//         }
//         else {
//             alert("Please Login")
//         }
//     }
//     catch (error) {
//         console.error('Error fetching data', error);
//     }
// };

// const postYourAnswer = async (id, data) => {
//     try {
//         const authToken = sessionStorage.getItem('authToken');

//         if (authToken) {
//             const headers = {
//                 Authorization: `Bearer ${authToken}`,
//             };

//             const response = await axios.post(`${base_url}/question/${id}/answers`, data, { headers });
//             // console.log("response", response);
//             return response;
//         }
//         else {
//             alert("Please Login")
//         }
//     }
//     catch (error) {
//         console.error('Error fetching data', error);
//     }
// }



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