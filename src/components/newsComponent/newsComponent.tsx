import {useState, useEffect} from 'react';
import NewsCardComponent from '../newsCardComponent/newsCardComponent';
import { Button } from '@mui/material';
import './newsComponent.css'

const NewsComponent = () => {
    const [allPosts, setAllPosts] = useState<any[]>([])
    const [posts, setPosts] = useState<any[]>([])
    const [page, setPage] = useState(1)



    useEffect(() => {

        if (!localStorage.hasOwnProperty('posts')) {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setAllPosts(json)
                setPosts(json.slice((page-1)*10, page*10))
            })
        } else {
            // @ts-ignore: Unreachable code error
            setAllPosts(JSON.parse(localStorage.getItem('posts')))
            // @ts-ignore: Unreachable code error
            setPosts(JSON.parse(localStorage.getItem('posts')).slice((page-1)*10, page*10))
        }
        
    }, [])

    const handleDelete = (id:any) => {
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
        })

        const foundPostIndex = allPosts.findIndex(p => p.id === id)
        setAllPosts(prev => {
            prev.splice(foundPostIndex, 1)
            return prev
        })
        // allPosts.splice(foundPostIndex, 1)   
        console.log(allPosts)
        setPosts(allPosts.slice(0, page*10))
        localStorage.setItem('posts', JSON.stringify(allPosts))
      }

    
    const handleLoadMore = () => {

        let morePosts: any = [];

        setPage(prev => {
            morePosts = allPosts.slice(((prev+1)-1)*10, (prev+1)*10)
            return (prev+1)
        })
        
        setPosts(prev => [...prev, ...morePosts])
        
    }


    return <div className='container'>
        <div className='news'>
            {posts.length > 0 && posts.map((p: any) => <NewsCardComponent key={p.id} news={p} handleDelete={handleDelete}></NewsCardComponent>)}
        </div>
        <Button className='load-button' onClick={handleLoadMore}>Load more</Button>
    </div>
}

export default NewsComponent;