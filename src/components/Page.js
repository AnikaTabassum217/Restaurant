import React from "react";
import icon from '../images/question.png';
import image from '../images/photo.png';

const Page=()=>{
  return(
      <div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full">
        <div className="flex items-start ml-12 space-x-7">      
        <p className="text-xl mr-12 mt-4">Category</p>
        <select className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4">
            <option value="">Select a category</option>
            <option value="a">India</option>
            <option value="b">Moglai</option>
            <option value="c">Italian</option>
        </select>   
        </div>

        <div className="flex items-start ml-8 space-x-0">      
        <p className="text-xl mr-12 mt-4">Select kitchen</p>
        <select className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4">
            <option value="">Select option</option>
            <option value="a">1st</option>
            <option value="b">2nd</option>
            <option value="c">3rd</option>
        </select>   
        </div>

        <div className="flex items-start ml-12 space-x-1">      
        <p className="text-xl mr-12 mt-4">Food name*</p>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
        </input>   
        </div>

        <div className="flex items-start ml-12 space-x-2">      
        <p className="text-xl mr-12 mt-4">Component</p>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
        </input>    
        </div>

        <div className="flex items-start ml-14 space-x-14">      
        <p className="text-xl mr-12 mt-4">Notes</p>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
        </input>    
        </div>


        <div className="flex items-start ml-14 space-x-1">      
        <p className="text-xl mr-12 mt-4">Description</p>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4" type="text" placeholder="Enter value">          
        </input>     
        </div>

    
        <div class="flex px-16 rounded-lg mt-4 space-x-1">
            <form action="/upload" method="post" enctype="multipart/form-data">
                <label for="image" className="text-xl mr-16 mt-8">Image</label>
                <input type="file" id="image" name="image" class="mt-2 px-12"></input>
            </form>
            <div>
            <img className="w-5 h-5 mt-2 " src={icon}> 
                </img>
            </div>       
        </div>

        <div className="flex items-center justify-start mt-2">
        <img className="w-40 h-40 ml-60" src={image} />
        </div>


       </div>
        <div className="h-full mt-6">
        <div className="flex items-start ml-12 space-x-4">      
        <p className="text-xl ml-12 mt-1">Vat</p>
        <img className="w-5 h-5 mt-2" src={icon}> 
                  </img>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md" type="text" placeholder="Enter value">          
        </input>
        </div>
          <div class="flex items-center m-8 space-x-4">
            <label class="flex items-center mr-6 space-x-4">
            <span class="ml-12  text-xl">Offer</span>
            <img className="w-5 h-5" src={icon}> 
                  </img>
            <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />  
            </label>

            <label class="flex items-center space-x-4">
            <span class="ml-36 text-xl ">Special</span>
            <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />   
            </label>
        </div>
        <div className="">
           <label class="flex items-center space-x-6">
            <span class="ml-2 text-xl">Custom quantity</span>
            <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
            </label>
        </div>

        <div className="flex items-start ml-12 space-x-2 mt-8">      
        <p className="text-xl ">Cooking time</p>
        <input className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md" type="text" placeholder="Enter value">          
        </input>
        </div>   

        <div className="flex items-start ml-12 space-x-14 mt-4">      
        <p className="text-xl ml-4 mt-4">Status</p>
        <select className="w-1/2 border-2 border-gray-800 bg-white px-3 py-2 rounded-md mt-4">
            <option value="">Select a category</option>
            <option value="a">Active</option>
            <option value="b">Inactive</option>
        </select>
        </div>     
        </div>
  </div>
</div>

    
  )
}
export default Page