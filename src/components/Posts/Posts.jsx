import './posts.css'
import Post from '../Post/Post'



export default function Posts(props){
    return (
			<ul className="posts">
				{props.posts.map(post=>{
                    return (
                        <Post key={post.id} 
                        thumbnail={post.thumbnail} 
                        category={post.category} 
                        title={post.title} 
                        profileImg={post.profileImg} 
                        created={post.created} 
                        userName={post.userName} 
                        contents={post.contents[0]['text']}/>
                        )
                })}
			</ul>

    )
}