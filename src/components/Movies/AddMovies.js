import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addMovie } from '../../api-helpers/api-helpers'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const labelProps = {
    mt:1,
    mb:1
}
export const AddMovies = () => {
    const [input, setInput] = useState({title:"", description: "", posterUrl:"", releaseDate:"", featured:false})
    const [actors, setActors] = useState([])
    const [actor, setActor] = useState("")
    const navigate = useNavigate()
    const handleChange = (e)=>{
        setInput((prevState)=>({...prevState, [e.target.name]: e.target.value}))
    }
    const handleSubmit =(e)=>{
     
        e.preventDefault()
        console.log(input, actors)
       
        addMovie({...input,actors}).then((res)=> console.log(res)).catch((err)=> console.log(err))
        navigate("/")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box width={"50%"} padding={10} margin={"auto"} display={"flex"} flexDirection={"column"} boxShadow={"10px 10px 20px #ccc"}>
           <Typography textAlign={"center"} variant='h5' fontFamily={"verdana"}>
            Add New Movie
           </Typography>
           <FormLabel sx={labelProps} >Title</FormLabel>
           <TextField value={input.title} onChange={handleChange} name='title' variant='standard' margin='normal'></TextField>
           
           <FormLabel sx={labelProps} >Description</FormLabel>
           <TextField value={input.description} onChange={handleChange} name='description' variant='standard' margin='normal'></TextField>
           <FormLabel  sx={labelProps} >Poster URL</FormLabel>
           <TextField value={input.posterUrl} onChange={handleChange} name='posterUrl' variant='standard' margin='normal'></TextField>
           <FormLabel sx={labelProps} >Release Date</FormLabel>
           <TextField type='date' value={input.releaseDate} onChange={handleChange} name='releaseDate' variant='standard' margin='normal'></TextField>
           <FormLabel sx={labelProps} >Actors</FormLabel>
           <Box display={"flex"}>
           <TextField 
           value={actor}
           onChange={(e)=>setActor(e.target.value)}
           name='actors' variant='standard' margin='normal'></TextField>
           <Button 
           onClick={()=>{setActors([...actors,actor])
                          setActor("")
        }}
           
           >Add</Button>
           </Box>
           <FormLabel  sx={labelProps} >Featured</FormLabel>
           <Checkbox name='featured' checked={input.featured} onClick={(e)=> setInput((prevState)=>({...prevState,featured: e.target.checked}))} sx={{mr: "auto"}} />
           
           <Button type='submit' variant='contained' sx={{width: "50%",margin:"auto", bgcolor:"#2b2d42",":hover": {bgcolor: "#121217"}}}>Add New Movie</Button>
            </Box>
        </form>
    </div>
  )
}
