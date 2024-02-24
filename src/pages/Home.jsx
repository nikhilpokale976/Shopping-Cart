import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";






const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [Loading, setLoading] = useState(false);
  const [posts ,setpost] = useState([]);

  async function fetchdata(){
        setLoading(true);

        try{
          const res = await fetch (API_URL);
          const data = await res.json();
          console.log(data);
          setpost(data);

        }
        catch(e){
          console.log("error occured");
          setpost([]);
        }
        setLoading(false);
  }

  useEffect(()=>{
        fetchdata();
  },[])

  
  return (
    
          <div className="flex justify-center items-center">

              {

                  Loading ? <Spinner/> : 
                    posts.length > 0 ? 
                    ( <div className="grid  xs:grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-5xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                      {
                            posts.map((post)=>{
                             return <Product  key={post.id}  post={post}/>
                            })
                       }   
                    </div>)
                  : 
                  (<div className=" flex justify-center items-center ">
                    <p>No Data Found</p>
                  </div>)
                 
                  

                  


                  

              }




          </div>



  );
};

export default Home;
