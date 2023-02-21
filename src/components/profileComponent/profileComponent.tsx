import { useEffect, useState } from "react";

const ProfileComponent = () => {

    const [user, setUser] = useState<any>()

    useEffect(() => {
        // @ts-ignore: Unreachable code error
        setUser(JSON.parse(localStorage.getItem('user')))

    }, [])


    return <div>
        {user && <div>{user.name}</div>  }
    </div>
}

export default ProfileComponent;