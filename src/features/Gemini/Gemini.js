import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    texts: [],
    input:''
}

export const GeminiSlice = createSlice({
    name: "Gemini",
    initialState,
    reducers: {                                                           //in redusers it contains properties and functions

        addtext: (state, action) => {
            const text = {
                id: nanoid(),
                text: action.payload.text,
                textmsg:action.payload.textmsg   //action give access of properties and state give initial state
            }
            state.texts.push(text);

        },
        removetext: (state, action) => {
            

            state.texts = state.texts.filter((textss) => (textss.id !== action.payload))
            state.input=" ";
            return;
        },
        setInput:(state,action)=>{
            state.input = action.payload;
        }
    }
})

export const { addtext, removetext ,setInput} = GeminiSlice.actions;  //indivual fuctionality we  export because it will work in comonents to change a state 
export default GeminiSlice.reducer;
