import { fetchData, fetchedData } from "../lib/blogpost";
import Link from "next/link";

const Blog = async() => {
    const data : fetchData[] = await fetchedData();
    
    return(
        <main>
            {data.map((iterate)=> 
            <div className="mb-5">

                <Link href={`/blog/${iterate.id}`} key={iterate.id} className="flex space-x-5">
                <p>Blog_ID : {iterate.id}</p>
                <p>Author_Name : {iterate.name}</p>
                <p>Blog_CreatedAt : {iterate.createdAt}</p>
                <img src={iterate.avatar} alt={iterate.id} width={40} height={40} />
                </Link>
                
            </div>)}
        </main>
        
    );
}
export default Blog;

