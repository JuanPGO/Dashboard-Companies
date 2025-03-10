import React from 'react'

function Login({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col justify-center h-full items-center'>
            <p>JuanPGO Dashboard</p>
            <h1>Welcome to my Dashboard </h1>
            <h2 className="text-2xl mb-3">JuanPGODashboard</h2>
            {children}
        </div>
    )
}

export default Login