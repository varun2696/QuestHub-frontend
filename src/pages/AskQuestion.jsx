import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    CssBaseline,
    Divider,
    TextField,
    TextareaAutosize,
    Toolbar,
    Typography
}
    from '@mui/material'

import Backdrop from '@mui/material/Backdrop';

import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import LinearProgress from '@mui/joy/LinearProgress';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';

import { forwardRef, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postNewQuestion } from '../redux/questions/action'


const instructionCard = (
    <>
        <CardContent>
            <Typography variant='h5'>
                Writing a good question
            </Typography>
            <Typography sx={{ fontSize: 14, mt: 1.5, mb: 2.5 }} color="text.secondary" >
                You’re ready to ask a programming-related question and this form will help guide you through the process.
                Looking to ask a non-programming question? See the topics here to find a relevant site.
            </Typography>
            <Typography variant='h6'>
                Steps
            </Typography >
            <Box component="ul" sx={{ fontSize: 14 }} color="text.secondary">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>Describe what you tried and what you expected to happen.</li>
                <li>Add “tags” which help surface your question to members of the community.</li>
                <li>Review your question and post it to the site.</li>
            </Box>
        </CardContent>
    </>
)


const QuestionTitleCard = ({ onChange, onClick, disabled, value }) => (
    <>
        <CardContent>
            <Typography sx={{ fontWeight: 600 }} gutterBottom>
                Title
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1 }} component="div">
                Be specific and imagine you’re asking a question to another person.
            </Typography>
            <TextField
                fullWidth
                id="fullWidth"
                size="small"
                onChange={onChange}
                value={value}
            />
        </CardContent>
        <CardActions sx={{ ml: 1 }}>
            <Button
                size="small"
                variant="contained"
                onClick={onClick}
                disabled={disabled}
            >
                Next
            </Button>
        </CardActions>
    </>
)


const QuestionTopicCard = forwardRef((props, ref) => {
    const { onChange, onClick, disabled, value } = props;

    return (
        <>
            <CardContent>
                <Typography sx={{ fontWeight: 600 }} gutterBottom>
                    Topic
                </Typography>
                <Typography sx={{ fontSize: 12, mb: 1 }} component="div">
                    Plase enter the topic or programming language of the question.
                </Typography>
                <TextField
                    fullWidth
                    id="fullWidth"
                    size="small"
                    placeholder='ex: React.js'
                    onChange={onChange}
                    value={value}
                    inputRef={ref}
                />
            </CardContent>
            <CardActions sx={{ ml: 1 }}>
                <Button
                    size="small"
                    variant="contained"
                    disabled={disabled}
                    onClick={onClick}
                >
                    Next
                </Button>
            </CardActions>
        </>
    )
})



const titleSuggestionCard = (
    <>
        <CardContent>
            <Typography>
                Writing a good title
            </Typography>
            <Divider />
            <Box sx={{
                display: 'flex',
                justifyContent: "space-around",
                alignItems: "center",
                mt: 2
            }}>
                <Box sx={{ border: "0px solid" }} >
                    <img width={"50px"} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7Ml7ZkEHovBQbmpv56RgTM8qnXSBIsBJNLWIfoOOoJ9fe2VR9" />
                </Box>

                <Box sx={{ pl: 2 }} >
                    <Typography sx={{ fontSize: "13px", mb: 1 }}>
                        Your title should summarize the problem.
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                        You might find that you have a better idea of your title after writing out the rest of the question.
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    </>
)



const problemSuggestionCard = (
    <>
        <CardContent>
            <Typography>
                Introduce the problem
            </Typography>
            <Divider />
            <Box sx={{
                display: 'flex',
                justifyContent: "space-around",
                alignItems: "center",
                mt: 2
            }}>
                <Box sx={{ border: "0px solid" }} >
                    <img width={"50px"} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7Ml7ZkEHovBQbmpv56RgTM8qnXSBIsBJNLWIfoOOoJ9fe2VR9" />
                </Box>

                <Box sx={{ pl: 2 }} >
                    <Typography sx={{ fontSize: "13px" }}>
                        Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.
                    </Typography>
                </Box>
            </Box>
        </CardContent>
    </>
)


const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionDescription, setQuestionDescription] = useState('');
    const [language, setLanguage] = useState("");
    const [postQuestionSuccess, setPostQuestionSuccess] = useState(false)
    const [open, setOpen] = useState(false);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const dispatch = useDispatch()


    const handleNext1Click = () => {
        input2Ref.current.focus();
        // console.log("next-btn 1 clicked")
    };

    const handleNext2Click = () => {
        input3Ref.current.focus();
        // console.log("next-btn 2 clicked")
    };

    const handlePostNewQuestion = () => {
        // console.log("text", textareaValue)

        const postAnswer = {
            questionTitle,
            questionDescription,
            language,
        }

        if (!questionDescription || !questionTitle || !language) {
            alert("Please Enter all fields")
        }
        else {

            dispatch(postNewQuestion(postAnswer)).then(() => {
                setQuestionTitle("");
                setQuestionDescription("");
                setLanguage("");
                setPostQuestionSuccess(true)
                setOpen(true)
            })

        }
    }

    const handleCloseAlert = () => {
        setPostQuestionSuccess(false);
        setOpen(false);
    };


    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleCloseAlert}
            >
                {postQuestionSuccess && (
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
                                    You have successfully posted your question.
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
                width: { lg: "80vw", md: "95vw", sm: '98vw', xs: "100vw", },
                minWidth: { lg: "80vw", md: "95vw", sm: '98vw', xs: "100vw", },
                // border: '1px solid', 
                m: 'auto'
            }}
            >
                <CssBaseline />
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{ fontWeight: 700 }}
                            marginRight={'auto'}
                        >
                            Ask a public question
                        </Typography>

                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                width: { lg: "40vw", md: "35vw", sm: "30vw", }
                            }}
                        // ml={'18rem'}
                        >
                            <img src="https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf" alt="" width={'100%'} />
                        </Box>
                    </Toolbar>

                    <Box sx={{
                        maxWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                        minWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                        mt: 3
                    }}>
                        <Card variant="outlined" sx={{ bgcolor: "#edf5fd" }} >
                            {instructionCard}
                        </Card>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        border: "0px solid",
                        mb: 5
                    }}>
                        <Box sx={{
                            maxWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                            minWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                            mt: 3
                        }}>
                            <Card variant="outlined" sx={{ height: "11rem" }} >
                                {<QuestionTitleCard
                                    value={questionTitle}
                                    onChange={(e) => setQuestionTitle(e.target.value)}
                                    disabled={!questionTitle}
                                    onClick={handleNext1Click}
                                />}
                            </Card>
                        </Box>

                        <Box sx={{
                            width: "340px",
                            display: { xs: 'none', sm: 'none', md: 'block' },
                            mt: 3
                        }}>
                            <Card variant="outlined" sx={{ height: "11rem" }}>
                                {titleSuggestionCard}
                            </Card>
                        </Box>
                    </Box>

                    <Box sx={{
                        maxWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                        minWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                        mt: 3
                    }}>
                        <Card variant="outlined" sx={{ height: "11rem" }} >
                            {<QuestionTopicCard
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                disabled={!language}
                                ref={input2Ref}
                                onClick={handleNext2Click}
                            />}
                        </Card>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        border: "0px solid",
                        mb: 5
                    }} >
                        <Box sx={{
                            maxWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                            minWidth: { lg: "50vw", md: "60vw", sm: "70vw", xs: "90vw" },
                            mt: 3, mb: 2,
                        }}>
                            <Card variant="outlined" >
                                <CardContent>
                                    <Typography sx={{ fontWeight: 600 }} gutterBottom>
                                        What are the details of your problem?
                                    </Typography>
                                    <Typography sx={{ fontSize: 12, mb: 1 }} component="div">
                                        Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                                    </Typography>
                                    <Box>
                                        <TextareaAutosize
                                            value={questionDescription}
                                            onChange={(e) => setQuestionDescription(e.target.value)}
                                            ref={input3Ref}
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
                                        size="small"
                                        variant="contained"
                                        onClick={handlePostNewQuestion}
                                        disabled={!questionDescription}
                                    >
                                        Post
                                    </Button>
                                </CardActions>

                            </Card>
                        </Box>
                        <Box sx={{
                            width: "340px",
                            display: { xs: 'none', sm: 'none', md: 'block' },
                            mt: 3
                        }}>
                            <Card variant="outlined" sx={{ height: "10rem" }}>
                                {problemSuggestionCard}
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AskQuestion;


