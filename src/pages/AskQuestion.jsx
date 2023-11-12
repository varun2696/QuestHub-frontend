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
    Toolbar,
    Typography
}
    from '@mui/material'
import TextArea from '../components/TextArea'


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


const questionTitleCard = (
    <>
        <CardContent>
            <Typography sx={{ fontWeight: 600 }} gutterBottom>
                Title
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1 }} component="div">
                Be specific and imagine you’re asking a question to another person.
            </Typography>
            <TextField fullWidth id="fullWidth" size="small" />
        </CardContent>
        <CardActions sx={{ ml: 1 }}>
            <Button size="small" variant="contained">Next</Button>
        </CardActions>
    </>
)


const questionTopicCard = (
    <>
        <CardContent>
            <Typography sx={{ fontWeight: 600 }} gutterBottom>
                Topic
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1 }} component="div">
                Plase enter the topic or programming language of the question.
            </Typography>
            <TextField fullWidth id="fullWidth" size="small" placeholder='ex: React.js' />
        </CardContent>
        <CardActions sx={{ ml: 1 }}>
            <Button size="small" variant="contained">Next</Button>
        </CardActions>
    </>
)


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


const questionDetailsCard = (
    <>
        <CardContent>
            <Typography sx={{ fontWeight: 600 }} gutterBottom>
                What are the details of your problem?
            </Typography>
            <Typography sx={{ fontSize: 12, mb: 1 }} component="div">
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
            </Typography>
            <Box>
                <TextArea />
            </Box>
        </CardContent>
        <CardActions sx={{ ml: 1 }}>
            <Button size="small" variant="contained">Post</Button>
        </CardActions>
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

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ border: "0px solid" }}>
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{ fontWeight: 700 }}
                    >
                        Ask a public question
                    </Typography>

                    <Box ml={'18rem'}>
                        <img src="https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf" alt="" width={'200%'} />
                    </Box>
                </Toolbar>

                <Box sx={{ maxWidth: "800px", mt: 3 }}>
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
                    <Box sx={{ width: "800px", mt: 3 }}>
                        <Card variant="outlined" sx={{ height: "11rem" }} >
                            {questionTitleCard}
                        </Card>
                    </Box>

                    <Box sx={{ width: "340px", mt: 3 }}>
                        <Card variant="outlined" sx={{ height: "11rem" }}>
                            {titleSuggestionCard}
                        </Card>
                    </Box>
                </Box>

                <Box sx={{ width: "800px", mt: 3 }}>
                    <Card variant="outlined" sx={{ height: "11rem" }} >
                        {questionTopicCard}
                    </Card>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    border: "0px solid",
                    mb: 5
                }} >
                    <Box sx={{ width: "800px", mt: 3, mb: 2, }}>
                        <Card variant="outlined" >
                            {questionDetailsCard}
                        </Card>
                    </Box>
                    <Box sx={{ width: "340px", mt: 3 }}>
                        <Card variant="outlined" sx={{ height: "10rem" }}>
                            {problemSuggestionCard}
                        </Card>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default AskQuestion;


