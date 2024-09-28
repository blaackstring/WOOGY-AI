import { configureStore } from "@reduxjs/toolkit";
import GeminiReducer from "../features/Gemini/Gemini";

export const store = configureStore({
    reducer:  GeminiReducer  // Use an object with the slice name as the key
    
});

