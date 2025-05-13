import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import alterpressApi from "./api";
import { listener } from "./listener";

export const store = configureStore({
	reducer: {
		[alterpressApi.reducerPath]: alterpressApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({})
			.concat(alterpressApi.middleware)
			.prepend(listener.middleware); 
	},
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
