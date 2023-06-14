import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helpers'
import { MovieItem } from './MovieItem'

export const Movies = () => {

  const [movies, setMovies] = useState()
  useEffect(()=>{
    getAllMovies()
    .then((data)=> setMovies(data.movies) )
    .catch((err)=> console.log(err))
    
  },[])
  console.log(movies)
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
      margin={"auto"}
      variant='h4'
      padding={2}
      width={"40%"}
      fontFamily={"'Kablammo', cursive"}
      color={"#047DFC"}
      textAlign={"center"}
      
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
       All Movies
      </Typography>
      <Box 
      width={"100%"}
      margin={"auto"}
      marginTop={5}
      display={"flex"}
      justifyContent={"flex-start"}
      flexWrap={"wrap"}
      >
        {movies && movies.map((movie, index)=>
         <MovieItem  key={index}
         id={movie._id}
         posterUrl={movie.posterUrl}
         releaseDate={movie.releaseDate}
         title={movie.title}/>)}

      </Box>
    </Box>
  )
}
