import { createSlice } from "@reduxjs/toolkit";

const initialSlice = createSlice({
    name: "initial",
    initialState: {
        result: {},
        remedy: {},
        state: false,
        file : null,
        loading : false,
        previewURL : ''
    },
    reducers: {
        setReduxResult: (state, action) => {
            state.result = action.payload
        },
        setReduxRemedyDet: (state, action) => {
            if (action.payload) {
                state.remedy = action.payload
            }
            else {
                state.remedy = null
            }
        },
        setReduxState: (state, action) => {
            state.state = action.payload
        }
        ,
        setReduxFile: (state, action) => {
            state.file = action.payload
        }
        ,
        setReduxLoading: (state, action) => {
            state.loading = action.payload
        }
        ,
        setReduxPreviewURL: (state, action) => {
            state.previewURL = action.payload
        }
    }
})

export const {  setReduxResult, setReduxRemedyDet, setReduxState, setReduxFile, setReduxLoading, setReduxPreviewURL } = initialSlice.actions
export default initialSlice.reducer