import React from 'react'

export const Layout = ({children, className}) => {
  return (
    <div className={` w-full h-full inline-block items-center z-0 bg-light p-32  ${className}`}>
        {children}
    </div>
  )
}
