import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetails, newBooking } from '../../api-helpers/api-helpers'
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material'

export const Booking = () => {
    const [movie, setMovie] = useState()
    const [input, setInput] = useState({seatNumber:"", date:""})
    const id = useParams().id
    const navigate = useNavigate()
  
    useEffect(()=>{
      getMovieDetails(id).then((res)=> setMovie(res.movie)).catch((err)=>console.log(err))
    },[id])
    console.log(movie)

    const handleChange =(e)=>{
      setInput((prevState)=>({...prevState, [e.target.name]: e.target.value}))
    }
    const handleSubmit =(e)=>{
     e.preventDefault();
     console.log(input);
     newBooking({...input, movie: movie._id}).then((res)=>  console.log(res)).catch((err)=> console.log(err))
     navigate("/movies")
    }
    const booking = ()=>{
      window.alert("Movie Booked, See Your Profile ")
    

    }
  return (
    <div>
      {
        movie && (
          <Fragment>
            <Typography
            padding={3}
            fontFamily={"fantasy"}
            variant='h4'
            textAlign={"center"}
            >
                Book Tickets Of Movie: {movie.title}
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
            <Box 
            display={"flex"}
            justifyContent={"column"}
            flexDirection={"column"}
            padding={3}
            width={"50%"}
            marginRight={"auto"}
            >
              <img width={"80%"} height={"300px"} src={movie.posterUrl} alt={movie.title}/>
<Box width={"80%"} marginTop={3} padding={2}>
  <Typography paddingTop={2}>
{movie.description}
  </Typography>
  <Typography fontWeight={"bold"} marginTop={1}>
    Actors: 
   {movie.actors.map((actor)=> " " + actor + ", ")}
  </Typography>
  <Typography fontWeight={"bold"} marginTop={1}>Releas Date :{new Date(movie.releaseDate).toDateString()}</Typography>
</Box>
            </Box>
            <Box width={"50%"} paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box padding={5} margin={"auto"} display={"flex"} flexDirection={"column"}>
                   <FormLabel>
                    Seat Number
                   </FormLabel>
                   <TextField value={input.seatNumber}
                   onChange={handleChange}
                   name='seatNumber' type='number' margin='normal' variant='standard'></TextField>
                   <FormLabel>
                    Booking Date
                   </FormLabel>
                   <TextField value={input.date}
                   onChange={handleChange} name='date' type='date' margin='normal' variant='standard'></TextField>
                   <Button onClick={booking} type='submit' sx={{ mt: 3}}>Book Now</Button>
                </Box>
              </form>
            </Box>
            </Box>
          </Fragment>
        )
      }
    </div>
  )
}
