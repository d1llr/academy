import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {createWrapper} from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import teacherSlice from './slices/teacherSlice'
import LargeTeacherSlice from './slices/LargeTeacherSlice'
import disciplinesSlice from './slices/disciplinesSlice';
import modalSlice from './slices/modalSlice';


const makeStore = () =>
  configureStore({
    reducer:{
        teacher: teacherSlice,
        teacherLarge : LargeTeacherSlice,
        disciplines: disciplinesSlice,
        modal: modalSlice
    },
    devTools: true,
  });

export const store = makeStore()



export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;



export default store;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const wrapper = createWrapper<RootStore>(makeStore);