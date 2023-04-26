import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { City } from '../../types/offer';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    }
  }
};
export const appProcess = createSlice({
  name: Namespace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: City}>) => {
      const {city} = action.payload;
      state.city = city;
    },
  },
});

export const {changeCity} = appProcess.actions;
