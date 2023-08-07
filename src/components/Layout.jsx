import React from 'react'

export const Layout = ({children, className}) => {
  return (
    <div className={` w-full h-full smd:px-28  ${className}`}>
        {children}
    </div>
  )
}
