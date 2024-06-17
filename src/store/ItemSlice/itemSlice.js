import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/consts";


export const createProduct = createAsyncThunk(
    'items/createProduct',
    async (payload, itemAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/products/`, payload,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return itemAPI.rejectWithValue(err)
        }
    }
)

export const createService = createAsyncThunk(
    'items/createService',
    async (payload, itemAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/services/`, payload,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return itemAPI.rejectWithValue(err)
        }
    }
)

export const getServices = createAsyncThunk(
    'items/getServices',
    async (payload, itemAPI) => {
    try {
        const res = await axios(`${BASE_URL}/services`, {
            params: {
                ...payload,
                size: 12,
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return itemAPI.rejectWithValue(err)
    }
})

export const getProducts = createAsyncThunk(
    'items/getProducts',
    async (payload, itemAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products`, {
            params: {
                ...payload,
                size: 12,
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return itemAPI.rejectWithValue(err)
    }
})

export const addProductImage = createAsyncThunk(
    'items/addProductImage',
    async (payload, itemAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products/images`, payload.image, {
            params: {
                page: payload.page,
                size: 12,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return itemAPI.rejectWithValue(err)
    }
})

export const deleteHotel = createAsyncThunk(
    'hotels/deleteHotel',
    async (payload, hotelAPI) => {
        try {
            const res = await axios.delete(`${BASE_URL}/hotels/${payload.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return hotelAPI.rejectWithValue(err)
        }
    }
)
export const getHotelById = createAsyncThunk(
    'hotels/getHotelById',
    async (payload, hotelAPI) => {
        try {
            const res = await axios(`${BASE_URL}/hotels/hotel/${payload.id}`);
            return res.data;
        } catch (err) {
            console.log(err);
            return hotelAPI.rejectWithValue(err)
        }
    }
)