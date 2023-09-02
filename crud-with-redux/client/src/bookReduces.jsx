import { createSlice } from '@reduxjs/toolkit';
import {booksData} from "./data.js";

const booksSlice = createSlice ({
    name: "books",
    // static file
    // initial data
    initialState: booksData,
    reducers: {

    }
})

export default booksSlice.reducer;