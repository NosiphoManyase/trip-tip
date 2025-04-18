import Link from 'next/link'
import React, { useState } from 'react'

// extra security to verify users --- Improvement ticket

const page = () => {

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  return (
    <div>
      <p>user incident information</p>
      <form>
        <label>
          First Name:
          <input type="text" name='firstName' value={userData.firstName} />
        </label>
        <label>
          Last Name:
          <input type="text" name='lastName' value={userData.lastName} />
        </label>
        <label>
          Email:
          <input type="text" name='email' value={userData.email} />
        </label>
        <label>
          Phone:
          <input type="text" name='phone' value={userData.phone} />
        </label>
      </form>
      <Link href='./incident-information'>Next</Link>
    </div>
  )
}

export default page