import React, { Fragment, useEffect, useState } from 'react'
import {  getAdminById } from '../api-helpers/api-helpers'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


export const AdminProfile = () => {
  const [booking, setBooking] = useState()
  const [admin, setAdmin] = useState()
  useEffect(()=>{
 

  getAdminById().then((res)=> setAdmin(res.admin)).catch((err)=> console.log(err))
  },[])
  console.log(admin);
 
 

 
  return (
    <Box width={"100%"}display={"flex"}>
      <Fragment>
   {   admin &&  (<Box flexDirection={"column"} justifyContent={"center"}
      alignContent={"center"}
      width={"30%"} padding={3}>
           <AccountCircleRoundedIcon sx={{fontSize:"10rem", textAlign:"center", marginLeft:5}}/>
                 
                  <Typography mt={1} padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
                       Email: {admin.email}
                  </Typography>
      </Box>)}
      {admin  && admin.addMovie.length > 0 &&  (   <Box width={"70%"} display={"flex"} flexDirection={"column"}>
        <Typography variant='h3' fontFamily={'verdana'} textAlign={"center"} padding={2}>
          Added Movies
        </Typography>
        <Box margin={"auto"} display={"flex"} flexDirection={"column"} width={"80%"}>
          <List>
            {admin.addMovie.map((movie, index)=> (
              <ListItem sx={{bgcolor: "#00d386",color:"white", textAlign:"center", margin:1}}>
                <ListItemText sx={{margin:1, width:"auto", textAlign:"left"}}>
                Movie: {movie.title}
                </ListItemText>
                
              
                
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>)}
      </Fragment>
      

    </Box>
  )
}
