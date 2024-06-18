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
                isPreview: payload.isPreview,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return itemAPI.rejectWithValue(err)
    }
})

export const addServiceImage = createAsyncThunk(
    'items/addServiceImage',
    async (payload, itemAPI) => {
    try {
        const res = await axios(`${BASE_URL}/services/images`, payload.image, {
            params: {
                page: payload.page,
                isPreview: payload.isPreview,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return itemAPI.rejectWithValue(err)
    }
})

export const deleteProduct = createAsyncThunk(
    'items/deleteProduct',
    async (payload, itemAPI) => {
        try {
            const res = await axios.delete(`${BASE_URL}/products/${payload.id}`, {
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

export const deleteService = createAsyncThunk(
    'items/deleteService',
    async (payload, itemAPI) => {
        try {
            const res = await axios.delete(`${BASE_URL}/services/${payload.id}`, {
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

export const getProductById = createAsyncThunk(
    'hotels/getProductById',
    async (payload, itemAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products/${payload.id}`);
            return res.data;
        } catch (err) {
            console.log(err);
            return itemAPI.rejectWithValue(err)
        }
    }
)

export const getServiceById = createAsyncThunk(
    'hotels/getServiceById',
    async (payload, itemAPI) => {
        try {
            const res = await axios(`${BASE_URL}/service/${payload.id}`);
            return res.data;
        } catch (err) {
            console.log(err);
            return itemAPI.rejectWithValue(err)
        }
    }
)

const initialState = {
    products: [],
    services: [],
    product: {},
    service: {},
    isProduct: true,
    showEditItemForm: false,
    showCreateItemForm: false,
    isLoading: false,
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        toggleCreateItemForm: (state, { payload }) => {
            state.showCreateItemForm = payload;
        },
        toggleEditItemForm: (state, { payload }) => {
            state.showEditItemForm = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(getServices.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getServices.fulfilled, (state, action) => {
            state.services = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getServices.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(createProduct.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.isLoading = false;
        })
        builder.addCase(createProduct.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(createService.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createService.fulfilled, (state, action) => {
            state.service = action.payload;
            state.isLoading = false;
        })
        builder.addCase(createService.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(getProductById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProductById.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(getServiceById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getServiceById.fulfilled, (state, action) => {
            state.service = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getServiceById.rejected, (state) => {
            state.isLoading = false;
        })

        builder.addCase(deleteHotel.fulfilled, (state) => {
            state.isLoading = false
        })
    }
})
export const {toggleCreateItemForm, toggleEditItemForm} = itemsSlice.actions;
export default itemsSlice.reducer;