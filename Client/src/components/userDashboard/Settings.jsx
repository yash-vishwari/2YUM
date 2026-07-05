import { useAuth } from "../../context/AuthContext";
import React from 'react'

function Settings() {

    const {userData} =useAuth()
  return (
    <>
      <div className="text-center mt-20 text-2xl font-extrabold">
        <div>
          <div className="flex flex-col justify-between">
            <h1 className="font-bold">Profile Settings</h1>
            <p>Manage your account information.</p>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings
