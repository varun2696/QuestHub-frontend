import { Card, Stack, Typography, Avatar } from '@mui/material'
import Chip from '@mui/material/Chip';

import { Link as LinkRoute } from 'react-router-dom'

const QuestionCard = () => {
    return (
        <>
            <LinkRoute to='/question/1' className='txt-dec-none'>
                <Card sx={{ p: 2, bgcolor: "#fdf7e7" }}>
                    <Stack direction={'row'} spacing={2}>
                        <Stack
                            spacing={1.5}
                            width={"4rem"}
                        // border="1px solid"
                        >
                            <Stack direction={'row'} spacing={0.5} >
                                <Typography fontSize={13}>1</Typography>
                                <Typography fontSize={13}>votes</Typography>
                            </Stack>

                            <Stack direction={'row'} spacing={0.5}>
                                <Typography fontSize={13}>1</Typography>
                                <Typography fontSize={13}>votes</Typography>
                            </Stack>
                            <Stack direction={'row'} spacing={0.5}>
                                <Typography fontSize={13}>1</Typography>
                                <Typography fontSize={13}>votes</Typography>
                            </Stack>
                        </Stack>

                        <Stack
                            spacing={1}
                            // border="1px solid"
                            width={'42rem'}
                        >
                            <Typography sx={{ display: "flex", color: '#3797d8', fontSize: '18px' }}>
                                REACT RACE ANIMATION - ADDING Finish line. (OR BETTer library)
                            </Typography>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                                <Stack direction={'row'} spacing={1}>
                                    <Chip label="Small" size="small" />
                                    <Chip label="Small" size="small" />
                                    <Chip label="Small" size="small" />
                                </Stack>

                                <Stack direction={'row'} alignItems={"center"} spacing={1}>
                                    <Avatar
                                        sx={{ width: 26, height: 26 }}
                                    >
                                        R
                                    </Avatar>
                                    <Typography>
                                        RaviKiran
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </LinkRoute>
        </>

    )
}

export default QuestionCard;
