import CreateIcon from '@mui/icons-material/Create';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import DynamicFeedSharpIcon from '@mui/icons-material/DynamicFeedSharp';
import { Box, Divider, Stack, Typography } from '@mui/material';



const RightCardHome = () => {

    return (
        <>
            <Box
                sx={{
                    width: "300px",
                    border: "1px solid #f5d584",
                    height: "auto",
                }}>
                <Box>
                    <Typography sx={{ p: 2, bgcolor: '#faecc6', fontWeight: 500 }}>
                        The Overflow Blog
                    </Typography>

                    <Divider />

                    <Stack bgcolor={'#fdf7e7 '}>
                        <Stack direction={'row'} spacing={1} p={1} >
                            <Box>
                                <CreateIcon fontSize='2rem' sx={{ pt: 1 }} />
                            </Box>
                            <Typography fontSize={14}>
                                An intuitive introduction to text embeddings
                            </Typography>
                        </Stack>

                        <Stack direction={'row'} spacing={1} p={1}>
                            <Box>
                                <CreateIcon fontSize='2rem' sx={{ pt: 1 }} />
                            </Box>
                            <Typography fontSize={14}>
                                An intuitive introduction to text embeddings
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Divider />

                <Box>
                    <Typography sx={{ p: 2, bgcolor: '#faecc6', fontWeight: 500 }}>
                        Featured on Meta
                    </Typography>

                    <Divider />

                    <Stack bgcolor={'#fdf7e7 '}>
                        <Stack direction={'row'} spacing={1} p={1} >
                            <Box>
                                <ChatBubbleOutlineSharpIcon
                                    color='primary'
                                    fontSize='2rem'
                                    sx={{ pt: 1 }}
                                />
                            </Box>
                            <Typography fontSize={14}>
                                Temporary policy: Generative AI (e.g., ChatGPT) is banned
                            </Typography>
                        </Stack>

                        <Stack direction={'row'} spacing={1} p={1}>
                            <Box>
                                <ChatBubbleOutlineSharpIcon
                                    color='primary'
                                    fontSize='2rem'
                                    sx={{ pt: 1 }}
                                />
                            </Box>
                            <Typography fontSize={14}>
                                Beta test for short survey in banner ad slots starting on the week of...
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Divider />

                <Box>
                    <Typography sx={{ p: 2, bgcolor: '#faecc6', fontWeight: 500 }}>
                        Hot Meta Posts
                    </Typography>

                    <Divider />

                    <Stack bgcolor={'#fdf7e7 '}>
                        <Stack direction={'row'} spacing={1} p={1} >
                            <Box>
                                <DynamicFeedSharpIcon fontSize='2rem' sx={{ pt: 1 }} />
                            </Box>
                            <Typography fontSize={14}>
                                Should the reputation for making a rollback be changed to improve dealing...
                            </Typography>
                        </Stack>

                        <Stack direction={'row'} spacing={1} p={1}>
                            <Box>
                                <DynamicFeedSharpIcon fontSize='2rem' sx={{ pt: 1 }} />
                            </Box>
                            <Typography fontSize={14}>
                                We should stop [copy]ing and [paste]ing tags
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default RightCardHome
