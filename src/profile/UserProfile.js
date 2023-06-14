import React, { Fragment, useEffect, useState } from 'react'
import { deleteBooking, getUserBooking, getUserDetails } from '../api-helpers/api-helpers'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

export const UserProfile = () => {
  const [booking, setBooking] = useState()
  const [user, setUser] = useState()
  const navigate = useNavigate()
  useEffect(()=>{
  getUserBooking().then((res)=> setBooking(res.booking)).catch((err)=> console.log(err))

  getUserDetails().then((res)=> setUser(res.user)).catch((err)=> console.log(err))
  },[])
  console.log(booking);
 
 

  const handleDelete =(id)=>{
    deleteBooking(id).then((res)=> console.log(res))
    .catch((err)=>console.log(err))
    navigate("/")
  }
  return (
    <Box width={"100%"}display={"flex"}>
      <Fragment>
   {   user &&  (<Box flexDirection={"column"} justifyContent={"center"}
      alignContent={"center"}
      width={"30%"} padding={3}>
           <AccountCircleRoundedIcon sx={{fontSize:"10rem", textAlign:"center", marginLeft:5}}/>
                  <Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
                       Name: {user.name}
                  </Typography>
                  <Typography mt={1} padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
                       Email: {user.email}
                  </Typography>
      </Box>)}
      {booking && (   <Box width={"70%"} display={"flex"} flexDirection={"column"}>
        <Typography variant='h3' fontFamily={"'Kablammo', cursive"} textAlign={"center"} padding={2}>
          Bookings
        </Typography>
        <Box margin={"auto"} display={"flex"} flexDirection={"column"} width={"80%"}>
          <List>
            {booking.map((book, index)=> (
              <ListItem sx={{bgcolor: "#00d386",color:"white", textAlign:"center", margin:1}}>
                <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Movie: {book.movie.title}
                </ListItemText>
                <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Seat Number: {book.seatNumber}
                </ListItemText>
                <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Release Date: {new Date(book.movie.releaseDate).toDateString()}
                </ListItemText>
                <IconButton onClick={()=>handleDelete(book._id)}><DeleteForeverIcon color='error'/></IconButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>)}
      </Fragment>
      

    </Box>
  )
}
