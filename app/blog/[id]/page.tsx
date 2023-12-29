import { fetchData } from "@/app/lib/blogpost";

const Post = async ({id} : {id:string}) => {
    const response = await fetch(`https://658830a590fa4d3dabf99286.mockapi.io/post/${id}`);
    const data : fetchData= await response.json();
    return data;
}


const SinglePost = async ({params} : {params:{id:string}}) => {
    const singleBlog = await Post(params);

    return(
        <main className="space-x-5 mx-5">
            <p>{singleBlog.id}</p>
            <p>{singleBlog.name}</p>
            <img src={singleBlog.avatar} alt={singleBlog.createdAt} />
            
        </main>
        
    );
}
export default SinglePost;