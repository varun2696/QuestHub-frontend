import { Box, Button, Card, CardActions, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Link as LinkRoute } from 'react-router-dom'

import RightCardHome from '../components/RightCardHome';
import MenuListItem from '../components/MenuListItem';
import TextArea from '../components/TextArea';


const questionDetailsCard = (
    <>
        <CardContent >
            <Typography variant='h5' sx={{ fontWeight: 500, pb: 2 }} gutterBottom>
                Your Answer
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


const SinglePageQnA = () => {
    return (
        <Box sx={{
            width: "80vw",
            m: 'auto',
            mt: 5,
            // border: "1px solid",
            // height: "80vh"
        }}>
            <Stack direction={'row'} spacing={1}>
                <Box sx={{
                    width: "12vw",
                    // border: "1px solid",
                    // height: "80vh"
                }}>
                    <MenuListItem />
                </Box>
                <Box sx={{
                    width: "68vw",
                    // border: "1px solid",
                    // height: "80vh"
                }}>
                    <Box>
                        <Stack direction={'row'} justifyContent={"space-between"} p={2}>
                            <Typography
                                variant="h6"
                                sx={{ mr: 'auto' }}
                            >
                                use cvxpy to optimize on an existing portfolio by limiting the number of trades to make
                            </Typography>
                            <LinkRoute to={'/ask-question'}>
                                <Button variant="contained">
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
                            <Typography
                                fontSize={'1.5rem'}
                                sx={{ pb: 1, pt: 2 }}>
                                5 Answers
                            </Typography>

                            <Card sx={{ mt: 2 }}>
                                <CardContent>
                                    <Typography>
                                        Sample code below to try to use at most 2 trades to optimize the portfolio, but I don't know how to express the constraint on the number of trades made to get the optimized portfolio. What i tried below results in the error in the code comment below.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Box sx={{ mt: 8, mb: 2, }}>
                                <Card variant="outlined" >
                                    {questionDetailsCard}
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


const tempGrid = (
    <>
        <Grid container>
            <Grid item xs={2}>
                <Box sx={{ height: "62vh", border: "1px solid red" }}>
                    1
                </Box>
            </Grid>
            <Grid container xs={10}>
                <Grid xs={12}>
                    <Box sx={{ height: "10vh", border: "1px solid" }}>
                        2
                    </Box>
                </Grid>
                <Grid xs={8}>
                    <Box sx={{ height: "50vh", border: "1px solid" }}>
                        3
                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Box sx={{ height: "50vh", border: "1px solid" }}>
                        4
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </>
)