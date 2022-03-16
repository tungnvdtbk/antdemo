import React, { useReducer, useState } from 'react';
import AppAbout from '../components/home/about';

import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature';
import AppFaq from  '../components/home/faq';
import AppPricing from '../components/home/pricing'

import AppContact from '../components/home/contact'

import * as feature from '../components/home/feature';
import { Button } from 'antd';

import { createSlice } from '@reduxjs/toolkit'
import { configureStore, combineReducers, createAsyncThunk } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import {AppFaqInitvalue, AppFaqInitvalue1} from '../components/home/faq'; 



export const getMe = createAsyncThunk('user/getMe', async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    console.log("thunk call");
    return {name: 'tung', age:'39'};
  });

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('increment');
      state.value += 1
    },
    decrement: (state) => {
     console.log('decrement');     
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      console.log("getMe.fulfilled action", action) ;
      state.current = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
const { increment, decrement, incrementByAmount } = counterSlice.actions
const { reducer: counterReducer } = counterSlice;


const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

const initState = {
    count: 0,
    data: feature.featureData
};

function AppHome() {
    console.log('featureData', feature.featureData);
    const [data, setData] = useState(AppFaqInitvalue);
    return (
        <Provider store={store}>
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature initValue={feature.featureData} />
            <AppFaq data ={data}/>
            <AppPricing/>
            <AppContact/>
            <Button onClick={() => setData(AppFaqInitvalue1)}>Change Faqdata</Button>
            {/* <Button onClick={() => {store.dispatch(decrement(1)); store.dispatch(getMe());}}>Decrease</Button> */}
        </div>
        </Provider>

    );
}

export default AppHome;