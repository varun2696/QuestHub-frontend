import { Avatar, Card, CardContent, Stack, Typography } from '@mui/joy'
import React from 'react'

const AnswerCard = ({ answerText, username }) => {
    return (
        <>
            <Card variant="outlined" sx={{ mt: 2 }}>
                <CardContent>
                    <Typography level="title-md" textColor="inherit">
                        {answerText}
                    </Typography>

                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignSelf={'end'}
                        alignItems={'center'}
                    >
                        <Avatar size='sm' variant="solid" />
                        <Typography
                            textColor="inherit"
                        >
                            {username}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

export default AnswerCard
