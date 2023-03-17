import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";
import { Funcionario, FuncionarioForm, FuncionariosState } from './types';

const apiUrl = "http://localhost:8800";

//ACTION
export const getFuncionarios = createAsyncThunk(
    'funcionarios/getFuncionarios',
    async (data, thunkApi) => {
        try {
            const response = await axios.get<Funcionario[]>(apiUrl);
            return response.data
        } catch (error: any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
)

export const postFuncionarios = createAsyncThunk(
    'funcionarios/postFuncionarios',
    async (data: FuncionarioForm, thunkApi) => {
        try {
            const response = await axios.post<Funcionario[]>(apiUrl, data);
            return response.data
        } catch (error: any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
)

export const deleteFuncionarios = createAsyncThunk(
    'funcionarios/deleteFuncionarios',
    async (id: number, thunkApi) => {
        try {
            const response = await axios.delete<Funcionario[]>(apiUrl + '/' + id);
            return response.data
        } catch (error: any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
)

export const putFuncionarios = createAsyncThunk(
    'funcionarios/putFuncionarios',
    async (data: Funcionario, thunkApi) => {
        try {
            const response = await axios.put<Funcionario[]>(apiUrl + '/' + data.idfuncionarios, {
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                data_nascimento: data.data_nascimento,
                cpf: data.cpf,
                funcao: data.funcao
            });
            return response.data
        } catch (error: any) {
            const message = error.message;
            return thunkApi.rejectWithValue(message);
        }
    }
)

const initialState = {
    loading: false,
    error: false,
    data: [],
} as FuncionariosState;

//SLICE
export const funcionarioSlice = createSlice({
    name: "funcionarios",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getFuncionarios.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFuncionarios.fulfilled, (state, action: PayloadAction<Funcionario[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getFuncionarios.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(postFuncionarios.pending, (state) => {
                state.loading = true;
            })
            .addCase(postFuncionarios.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(postFuncionarios.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteFuncionarios.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteFuncionarios.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteFuncionarios.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(putFuncionarios.pending, (state) => {
                state.loading = true;
            })
            .addCase(putFuncionarios.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(putFuncionarios.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default funcionarioSlice.reducer