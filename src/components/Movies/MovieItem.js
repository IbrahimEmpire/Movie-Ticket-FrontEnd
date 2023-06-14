import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const MovieItem = ({id, title, releaseDate, posterUrl}) => {
  
  return (
    <Card sx={{ margin:2, width: 250, height:320, borderRadius:5,":hover":{ boxShadow: "10px 10px 20px #5BFEF0"} }}>
   <img height={'50%'} width={'100%'} src={posterUrl} alt={title}/>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {new Date(releaseDate).toDateString()}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant='contained' width="70%" LinkComponent={Link} to={`/booking/${id}`} sx={{ margin: "auto"}} size="small">Book</Button>
    
    </CardActions>
  </Card>
  )
}
