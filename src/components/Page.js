import {React,useState} from "react";
import icon from '../images/question.png';
import image from '../images/photo.png';


// import { useState } from 'react';


const Page=()=>{

    const [imgfile,uploadimg] = useState("");

    const imgFileHandler = (e)=>{
        if(e.target.files.length !==0){
            uploadimg(URL.createObjectURL(e.target.files[0]))
        }
        }
  return(
      <div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full">

        <div class="flex items-start ml-12 space-x-7">
            <div class="w-1/5">
                <div class="text-xl mr-12 mt-4">
                <p>Category</p>
                </div>
            </div>
            <div class="w-4/5">
                <select class="border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4 w-1/2">
                <option value="">Select a category</option>
                <option value="a">India</option>
                <option value="b">Moglai</option>
                <option value="c">Italian</option>
                </select>
            </div>
            </div>

            <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="text-xl mr-12 mt-4">
                    <p>Select kitche</p>
                    </div>
                </div>
                <div class="w-4/5">
                    <select class="border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4 w-1/2">
                    <option value="">Select kitchen</option>
                    <option value="a">1st</option>
                    <option value="b">2nd</option>
                    <option value="c">3rd</option>
                    </select>
                </div>
            </div>


            <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="text-xl mr-12 mt-4">
                    <p>Food name*</p>
                    </div>
                </div>
                <div class="w-4/5">
                    <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
                    </input>
                </div>
            </div>

            <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="text-xl mr-12 mt-4">
                    <p>Component</p>
                    </div>
                </div>
                <div class="w-4/5">
                    <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
                    </input>
                </div>
            </div>

            <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="text-xl mr-12 mt-4">
                    <p>Notes</p>
                    </div>
                </div>
                <div class="w-4/5">
                    <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
                    </input>
                </div>
            </div>


            <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="text-xl mr-12 mt-4">
                    <p>Description</p>
                    </div>
                </div>
                <div class="w-4/5">
                    <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
                    </input>
                </div>
            </div>
   
        {/* <div class="flex px-16 rounded-lg mt-4 space-x-1">
            <form action="/upload" method="post" enctype="multipart/form-data">
                <label for="image" className="text-xl mr-24 mt-8">Image</label>
                <input type="file" id="image" name="image" class="mt-2 px-12 ml-6"></input>
            </form>
            <div>
            <img className="w-5 h-5 mt-2 " src={icon}> 
                </img>
            </div>       
        </div> */}

        {/* <div className="flex items-center justify-start mt-2">
        <img className="w-20 h-20 ml-72" src={image} />
        </div> */}

        {/* <div class="flex px-16 rounded-lg mt-4 space-x-1">
                <div className="">
                <p class="text-xl">Image</p>
                </div>
                <div className="float-right">
                <input type="file" onChange={imgFileHandler}/><br></br>
                <img className="mt-2" src={imgfile} height='200' width='200' ></img>
                </div>       
        </div> */}

            {/* PREVIOUS */}

             {/* IMAGE UPLOAD */}

            <div>
                <div class="flex px-16 rounded-lg mt-4 space-x-1">
                    <div>
                        <label for="image" className="text-xl mr-16 mt-8">Image</label>
                        <input type="file" onChange={imgFileHandler} class="mt-2 px-16"></input>
                    </div>
                    <div>
                    <img className="w-5 h-5 mt-2 " src={icon}> 
                        </img>
                    </div>       
                </div>

                <div className="flex items-center justify-start mt-4">
                    <img src={imgfile} height='200' width='200' className="ml-64"></img>
                </div>
            </div>


     


       </div>
        <div className="h-full mt-6">


        {/* <div className="flex items-start ml-12 space-x-4">      
        <p className="text-xl ml-12 mt-1">Vat</p>
        <img className="w-5 h-5 mt-2" src={icon}> 
                  </img>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md" type="text" placeholder="Enter value">          
        </input>
        </div> */}

           <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="flex text-xl mr-12 mt-4">
                    <p>Vat</p>
                    <img className="w-5 h-5 mt-1 ml-2" src={icon}> 
                   </img>
                    </div>
                </div>
                <div class="w-4/5">
                    <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
                    </input>
                </div>
            </div>

            {/* Offer and Special */}


          <div class="flex items-center m-8 space-x-4">
            <div class="flex items-start ml-12 space-x-7">
                <div class="w-full">
                    <label class="flex items-center mr-6 space-x-4">
                        <span class="ml-12  text-xl">Offer</span>
                        {/* <img className="w-5 h-5" src={icon}> 
                            </img> */}
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />  
                    </label>
                </div>

                <div class="w-full">
                    <label class="flex items-center mr-40 space-x-4">
                        <span class="ml-12  text-xl">Special</span>
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 " />  
                    </label>
                </div>              
            </div>
        </div>

            {/* Custom */}


                <div class="w-1/2"> 
                    <label class="flex items-center mr-40 space-x-4">
                        <span class="ml-12  text-xl">Custom Quantity</span>
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 ml-12" />  
                    </label>
                </div>


        <div class="flex items-start ml-12 space-x-7">
                <div class="w-1/5">
                    <div class="text-xl mr-12 mt-4">
                    <p>Cooking Time</p>
                    </div>
                </div>
                <div class="w-4/5">
                    <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
                    </input>
                </div>
            </div>   

            <div class="flex items-start ml-12 space-x-7">
            <div class="w-1/5">
                <div class="text-xl mr-12 mt-4">
                <p>Status</p>
                </div>
            </div>
            <div class="w-4/5">
                <select class="border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4 w-1/2">
                <option value="">Status</option>
                <option value="a">Active</option>
                <option value="b">Inactive</option>
                </select>
            </div>
            </div>     
        </div>
  </div>
</div>

    
  )
}
export default Page