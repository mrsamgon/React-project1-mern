import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Ecommmerce from "../componentes/E-commerceNavbar";

function SingleBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: "",
    });

    const fetchSingleBlog = async () => {
        try {
            const response = await axios.get(`https://mern3-get.onrender.com/blog/${id}`);
            console.log("Fetched Blog:", response.data);
            setBlog(response.data.data);
        } catch (error) {
            console.error("Error fetching the blog:", error);
        }
    };

    const deleteGarneFunction = async () => {
        try {
            const response = await axios.delete(`https://mern3-get.onrender.com/blog/${id}`);
            if (response.status === 200) {
                alert("Deleted successfully");
                navigate("/");
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.error("Error deleting the blog:", error);
        }
    };

    useEffect(() => {
        fetchSingleBlog();
    }, []);

    return blog.title ? (
        <>
            <Ecommmerce />
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img
                                    className="w-full h-full object-cover"
                                    src={blog.image}
                                    alt={blog.title || "Product Image"}
                                />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <Link to={`/edit/${blog._id}`}>
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                            Edit me
                                        </button>
                                    </Link>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button
                                        className="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                                        onClick={deleteGarneFunction}
                                    >
                                        Delete me
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {blog.subtitle}
                            </p>
                            <div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {blog.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <p>Loading...</p>
    );
}

export default SingleBlog;
