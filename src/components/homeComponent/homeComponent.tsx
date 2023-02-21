import { useEffect, useState } from "react";

const HomeComponent = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => setPosts(json))
    }, [])


    return <div>
        home
        {/* {posts && posts.map((p: any) => <div>{p.title}</div>)} */}
    </div>
}

export default HomeComponent;