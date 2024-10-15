import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default loading