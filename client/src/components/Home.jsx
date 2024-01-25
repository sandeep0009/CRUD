import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        handleUser();
    }, []);

    const handleUser = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/show");
            console.log(res.data)
            setData(res.data.data);
          
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:3000/api/delete/${id}`);
            location.reload();
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className="bg-slate-900 h-screen">
            <div className="container flex justify-center items-center">
                <Link to="/add" className="bg-orange-600 text-white w-32 h-8 text-center rounded-lg mt-8">
                    Add Person
                </Link>
            </div>

            <div className="all-users mt-10 w-full">
                <table className="border-spacing-2  rounded-xl w-full">
                    <thead className="bg-orange-600 text-white rounded-lg">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-white text-center">
                        {data.map((i) => (
                             <tr key={i._id}className="mb-9">
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.address}</td>
                                <td>{i.phone}</td>
                                <td className="flex justify-center items-center space-x-2">
                                <Link to={`/update/${i._id}`} className="bg-blue-600 text-white px-4 rounded-md" >Update</Link>
                                <button className="bg-red-700 px-4 text-white rounded-md" onClick={()=>handleDelete(i._id)}>Delete</button>
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
