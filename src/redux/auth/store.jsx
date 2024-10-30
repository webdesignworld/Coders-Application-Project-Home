import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice"
import themeReducer from "../theme/themeSlice"


 const store = configureStore ({
        reducer: {
              
               auth: authReducer,
               theme: themeReducer,
        },

        devTools: true,
});

export default store;