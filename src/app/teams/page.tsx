'use client'
import { Grid, Skeleton, Stack, Typography } from '@mui/material'
import axios from 'axios'
import MainCard from 'components/cards/MainCard'
import { IConference } from 'interfaces'
import { useEffect, useState } from 'react'
import TeamCard from './TeamCard'

const Teams = () => {

  const [conferences, setConferences] = useState<IConference[]>([])
  const [loadTeams, setLoadTeams] = useState(true)

  useEffect(() => {
    getTeams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTeams = () => {
    try {
      handleGetTeam()
    } catch (err) {
      console.log('err', err);
    }
  }

  const handleGetTeam = async () => {
    setLoadTeams(true)
    const { data } = await axios.get(`/api/teams`)
    setConferences(data)
    setLoadTeams(false)
  }



  return (
    <MainCard title="Teams">
      {loadTeams ?
        <Skeleton variant="rounded" width={'100%'} height={'60vh'} /> :
        conferences?.map((conference, idx) => (
          <Stack key={idx} alignItems={'flex-start'} sx={{ mb: '24px' }}>
            <Typography variant='h4' sx={{ my: '24px' }}>{conference.name}</Typography>
            <Grid container spacing={'12px'} width={'100%'} justifyContent={'flex-start'} alignItems={'center'}>
              {
                conference.teams.map((team, idx) =>
                  <Grid item key={team.code} xs={2}>
                    <TeamCard team={team} position={idx + 1}></TeamCard>
                  </Grid>
                )
              }
            </Grid>
          </Stack>
        ))
      }
    </MainCard>
  )
}

export default Teams