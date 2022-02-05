import React from 'react';

export const UserStoreContext = React.createContext()



const UserStoreProvider = ({children}) => {

    const [profile,setProfile] = React.useState(null)

    const userStore = {
        profille: profile,
        updateProfile: (profile) => setProfile(profile)
    }

    return (
        <UserStoreContext.Provider value={userStore}>
            {children}
        </UserStoreContext.Provider>
    )
}

export default UserStoreProvider