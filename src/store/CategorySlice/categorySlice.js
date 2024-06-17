export const createCategory = createAsyncThunk(
    'categories/createCategory',
    async (payload, API) => {
        try {
            const res = await axios.post(`${BASE_URL}/categories/`, payload,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return API.rejectWithValue(err)
        }
    }
)

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (payload, API) => {
    try {
        const res = await axios(`${BASE_URL}/categories`, {
            params: {
                ...payload,
                size: 10,
            }
        });
        return res.data;
    } catch (err) {
        console.log(err);
        return API.rejectWithValue(err)
    }
})

export const deleteCategory = createAsyncThunk(
    'categories/deleteCategory',
    async (payload, API) => {
        try {
            const res = await axios.delete(`${BASE_URL}/categories/${payload.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return API.rejectWithValue(err)
        }
    }
)
export const getCategoryById = createAsyncThunk(
    'categories/getCategoryById',
    async (payload, API) => {
        try {
            const res = await axios(`${BASE_URL}/categories/${payload.id}`);
            return res.data;
        } catch (err) {
            console.log(err);
            return API.rejectWithValue(err)
        }
    }
)

const initialState = {
    categories: [],
    category: {},
    showCreateCategoryForm: false,
    isLoading: false,
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        toggleShowCreateCategoryForm: (state, { payload }) => {
            state.showCreateCategoryForm = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createCategory.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.isLoading = false;
        })
        builder.addCase(createCategory.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(getCategoryById.pending, (state) => {
            state.isLoaing = true;
        })
        builder.addCase(getCategoryById.fulfilled, (state, action) => {
            state.category = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCategoryById.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(deleteCategory.fulfilled, (state) => {
            state.isLoading = false
        })
    }
})
export const {toggleShowCreateHotelForm, toggleCreateHotelFormStage, clearHotels} = hotelsSlice.actions;
export default hotelsSlice.reducer;