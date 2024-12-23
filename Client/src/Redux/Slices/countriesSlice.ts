import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCountries } from "../Fetchs/fetchCountries";

export interface ICountry {
  name: string;
  eventsCount: number;
  bigOrganization: string;
}

interface CountriesState {
  countries: ICountry[];
}

const initialState: CountriesState = {
  countries: [],
};

const CountriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<ICountry>) => {
      state.countries.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, () => {
        console.log("Fetching countries...");
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<ICountry[]>) => {
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (_, action) => {
        console.error("Failed to fetch countries:", action.error.message);
      });
      
  },
});


export const { addCountry } = CountriesSlice.actions;

export default CountriesSlice;
