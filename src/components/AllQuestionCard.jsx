import { Card, Stack, Typography, Avatar, Divider } from '@mui/material'
import Chip from '@mui/material/Chip';

import { Link as LinkRoute } from 'react-router-dom'

const AllQuestionCard = ({ username, votes, answers, language, questionTitle, id, userFirstLetter, questionDescription }) => {
    return (
        <>
            <LinkRoute to={`/question/${id}`} className='txt-dec-none'>
                <Card sx={{ p: 2, bgcolor: "#edf5fd", }}>
                    <Stack direction={'row'} spacing={2}>
                        <Stack
                            spacing={1}
                            pt={1.5}
                        >
                            <Stack direction={'row'} spacing={0.5} >
                                <Typography fontSize={13}>{votes}</Typography>
                                <Typography fontSize={13}>votes</Typography>
                            </Stack>

                            <Stack direction={'row'} spacing={0.5}>
                                <Typography fontSize={13}>{answers}</Typography>
                                <Typography fontSize={13}>answers</Typography>
                            </Stack>
                        </Stack>

                        <Stack
                            spacing={1}
                            sx={{ width: '40rem' }}
                        >
                            <Typography sx={{
                                display: "flex",
                                textAlign: 'left',
                                color: '#a73fb9',
                                fontSize: { lg: "1.3rem", md: "1.2rem", sm: "1.2rem", xs: "0.8rem" }
                            }}>
                                {questionTitle}
                            </Typography>

                            <Typography sx={{
                                display: "flex",
                                textAlign: 'left',
                                fontSize:'0.8rem'
                            }}
                            >
                                {questionDescription}
                            </Typography>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Stack direction={'row'} spacing={1}>
                                    <Chip label={language} size="small" />
                                </Stack>

                                <Stack direction={'row'} alignItems={"center"} spacing={1}>
                                    <Typography>
                                        {username}
                                    </Typography>
                                    <Avatar sx={{ width: 28, height: 28 }}>
                                        {userFirstLetter}
                                    </Avatar>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
                <Divider />
            </LinkRoute>
        </>

    )
}

export default AllQuestionCard;
