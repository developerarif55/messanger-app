import React, { forwardRef } from 'react';
import "./App.css";

const  Message = forwardRef(({ message, username }, ref)=> {
 const isUser = username === message.username;

    return (
       <> 
   
  
       <div ref ={ref} className={`flex items-end p-2 ${isUser && "flex items-end justify-end"}`}>
           {/* for colom */}
           <div className="flex flex-col">
             <span className="font-extrabold  py-2 flex " >
                {!isUser && `${message.username || 'unknown user' } `} 
          </span>
          <div className={isUser ? "px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white " : "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-900"}>
    
          <div>{message.message}</div>
      </div>
      </div>
   </div>
   </>
    ) 
})

export default Message
 