import { Card, Stack, Avatar, Divider } from '@mui/material'
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import { Link as LinkRoute } from 'react-router-dom'


const AllQuestionCard = ({ loading, username, votes, answers, language, questionTitle, id, userFirstLetter, questionDescription }) => {
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
                                <Typography fontSize={13}>
                                    <Skeleton loading={loading}>{votes}</Skeleton>
                                </Typography>
                                <Typography fontSize={13}>
                                    <Skeleton loading={loading}>votes</Skeleton>
                                </Typography>
                            </Stack>

                            <Stack direction={'row'} spacing={0.5}>
                                <Typography fontSize={13}>
                                    <Skeleton loading={loading}>{answers}</Skeleton>
                                </Typography>
                                <Typography fontSize={13}>
                                    <Skeleton loading={loading}>answers</Skeleton>
                                </Typography>
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
                                <Skeleton loading={loading}>{questionTitle}</Skeleton>
                            </Typography>

                            <Typography sx={{
                                display: "flex",
                                textAlign: 'left',
                                fontSize: '0.8rem'
                            }}
                            >
                                <Skeleton loading={loading}>{questionDescription}</Skeleton>
                            </Typography>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Stack direction={'row'} spacing={1}>
                                    <Chip label={
                                        <Skeleton loading={loading} animation="wave" variant="rectangular" width={80} height={15} >
                                            {language}
                                        </Skeleton>
                                    } size="small" />
                                </Stack>

                                <Stack direction={'row'} alignItems={"center"} spacing={1}>
                                    <Typography>
                                        <Skeleton loading={loading}>{username}</Skeleton>
                                    </Typography>
                                    <Avatar sx={{ width: 28, height: 28 }}>
                                        <Skeleton loading={loading}>{userFirstLetter}</Skeleton>
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
