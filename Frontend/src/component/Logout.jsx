import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            })
            localStorage.removeItem('Users')
            toast.success("Logout successfully");

            setTimeout(() => {
                window.location.reload();
            }, 3000)
        } catch (error) {
            toast.error("Error: " + error)
            setTimeout(() =>{},2000)
        }
    }

    return (
        <>
            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout
