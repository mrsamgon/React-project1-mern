import axios from "axios"
import Card from "../componentes/Card"
import Ecommmerce from "../componentes/E-commerceNavbar"
import Navbar from "../componentes/Navbar"
import { useEffect, useState } from "react"
import { createWebSocketModuleRunnerTransport } from "vite/module-runner"






function Home(){
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async()=>{
      const response =  await axios.get("http://localhost:3000/blog/")
      setBlogs(response.data.data)

    }

    useEffect(()=>{
        fetchBlogs()
    },[])


    return(
        <>
        <Navbar/>
        {/* <Ecommmerce/> */}
        <div className="flex flex-wrap">
            {
                blogs.map(function(blog){
                    return(
                        <Card blog= {blog} />

                    )
                })
            }
       
        </div>
        


        
        
        
        
        </>
    )
}

export default Home