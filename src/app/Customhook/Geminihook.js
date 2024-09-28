  import { useState, useEffect } from "react";
  import { GoogleGenerativeAI } from "@google/generative-ai";
  import { useDispatch } from "react-redux";
 
  export default function Geminihook() {
    const [texxt, setText] = useState("");
    const dispatch=useDispatch()

      const fetchData = async (input) => {

        try {
      
          const genAI = new GoogleGenerativeAI(import.meta.env.VITE_AI_API_KEY); // Ensure your API key is correct and available
          const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

          const result = await model.generateContent(input);

          let response=result.response.text().split("**");
          let responsearray=""
         for(let i=0;i<response.length;i++)
         {
          if(i===0|| i%2!==1){
            responsearray+=response[i]
          }
          else{
              responsearray+="<b>"+response[i]+"</b>"
          }
         }
          setText(responsearray.split("*").join("</br>")); // Make sure to check the structure of the response
        
        
          
          
        } catch (error) {
          console.error("Error fetching data:", error);
          setText("Error fetching data.");
        }
      };


   
  return { texxt, fetchData, };
  }

