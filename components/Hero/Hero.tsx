"use client"
import React from 'react'
import { Button } from '../ui/button'


export default function Hero() {

  const handleButtonClick = () => {
    alert('Button clicked!')
  }
  return (
    <div>
      <Button onClick={handleButtonClick}>Click Here</Button>
    </div>
  )
}
