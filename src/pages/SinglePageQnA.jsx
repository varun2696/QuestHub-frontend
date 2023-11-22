import { Box, Card, CardActions, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import { Button } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import LinearProgress from '@mui/joy/LinearProgress';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { useEffect, useState } from 'react';
import { Link as LinkRoute, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import RightCardHome from '../components/RightCardHome';
import MenuListItem from '../components/MenuListItem';
import AnswerCard from '../components/AnswerCard';
import { getQuestionbyId, postYourAnswer } from '../redux/questions/action';



const SinglePageQnA = () => {

    const { id } = useParams();
    const [textareaValue, setTextareaValue] = useState('');
    const [postAnswerSuccess, setPostAnswerSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const { questionById } = useSelector(state => state.questionsReducer)
    const dispatch = useDispatch()


    const handlePostAnswer = () => {
        // console.log("text", textareaValue)

        const postAnswer = {
            answerText: textareaValue
        }

        dispatch(postYourAnswer(id, postAnswer))
            .then(() => {
                setTextareaValue("");
                setPostAnswerSuccess(true)
                setOpen(true)
            })

    }

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    useEffect(() => {
        dispatch(getQuestionbyId(id))
    }, [])


    const handleCloseAlert = () => {
        setPostAnswerSuccess(false);
        setOpen(false)
    };


    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleCloseAlert}
            >
                {postAnswerSuccess && (
                    <Box
                        position="fixed"
                        top="10%"
                        left="35%"
                        transform="translateX(-50%)"
                        width="30%"
                        zIndex={10} // Set a high z-index to make sure it's on top
                    >
                        <Alert
                            size="lg"
                            color="success"
                            variant="solid"
                            invertedColors
                            startDecorator={
                                <AspectRatio
                                    variant="solid"
                                    ratio="1"
                                    sx={{
                                        minWidth: 40,
                                        borderRadius: '50%',
                                        boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
                                    }}
                                >
                                    <div>
                                        <Check fontSize="xl2" />
                                    </div>
                                </AspectRatio>
                            }
                            endDecorator={
                                <IconButton
                                    variant="plain"
                                    sx={{
                                        '--IconButton-size': '32px',
                                        transform: 'translate(0.5rem, -0.5rem)',
                                    }}
                                    onClick={handleCloseAlert}
                                >
                                    <Close />
                                </IconButton>
                            }
                            sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
                        >
                            <div>
                                <Typography variant='h6'>Success</Typography>
                                <Typography variant='body1'>
                                    You have successfully posted your Answer.
                                </Typography>
                            </div>
                            <LinearProgress
                                variant="solid"
                                color="success"
                                value={40}
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    borderRadius: 0,
                                }}
                            />
                        </Alert>

                    </Box>
                )}
            </Backdrop>
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
        </>
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