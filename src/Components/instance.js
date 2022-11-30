import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseURL:"https://git.heroku.com/labbbbbb5.git"
}) 
  
 

export default instance