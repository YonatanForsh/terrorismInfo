import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries", async () => {
    try {
    const response = await fetch("http://localhost:3000/api/countries",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
    throw new Error("Failed to fetch countries");
    }
    const data = await response.json();
    return data;
    } catch (error) {
    console.error("Error fetching countries: ", error);
    throw error;
    }
 }
);
