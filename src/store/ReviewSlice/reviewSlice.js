import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";

export const getFeedbacks = createAsyncThunk(
    'feedbacks/getFeedbacks',
    async (payload, feedbackAPI) => {
        try {
            const res = await axios(`${BASE_URL}/product-reviews/${payload.hotelId}`);
            return res.data;
        } catch (err) {
            console.log(err);
            return feedbackAPI.rejectWithValue(err)
        }
    }
)

export const deleteReview = createAsyncThunk(
    'bookings/deleteFeedback',
    async (payload, feedbackAPI) => {
        try {
            const res = await axios.delete(`${BASE_URL}/product-reviews/${payload.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return feedbackAPI.rejectWithValue(err)
        }
    }
)

export const createFeedback = createAsyncThunk(
    'feedbacks/createFeedbacks',
    async (payload, feedbackAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/product-reviews`,  payload, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return feedbackAPI.rejectWithValue(err);
        }
    }
)

const initialState = {
    feedbacks: [],
    showFeedbacks: false,
    isLoading: false
}


const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        toggleFeedbacks: (state, { payload }) => {
            state.showFeedbacks = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFeedbacks.fulfilled, (state, action) => {
            state.feedbacks = action.payload;
        })
        builder.addCase(createFeedback.fulfilled, (state, action) => {
            let feedbacks = state.feedbacks;
            feedbacks.push(action.payload);
            state.feedbacks = feedbacks;
        })
        builder.addCase(deleteFeedback.fulfilled, (state) => {
            state.isLoading = false;
        })
    }
})

export const {toggleFeedbacks} = feedbacksSlice.actions;
export default feedbacksSlice.reducer;