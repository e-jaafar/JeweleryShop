import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        nameInitial: "Guest, log in",
        name: "",
        email: "",
        password: "",
        realName: "molengeek",
        realEmail: "molengeek@gmail.com",
        realPassword: "geek",
        validation: false,
        message: ""
    },
    reducers: {
        recupName(state, action) {
            state.name = action.payload
        },
        recupEmail(state, action) {
            state.email = action.payload
        },
        recupPassword(state, action) {
            state.password = action.payload
        },
        connection(state) {
            if (state.name === state.realName && state.realEmail === state.email && state.realPassword === state.password) {
                state.validation = true
                state.message = "You are connected !"
                state.nameInitial = state.name
                // Convertit la première lettre en majuscule
            } else {
                state.validation = false
                state.message = "wrong credentials !"
            }
        },
        disconnection(state) {
            state.name = ""
            state.email = ""
            state.password = ""
            state.validation = false
            state.message = "You are disconnected !"
            state.nameInitial = "Guess, log in"
        }
    }
})

export const { recupName, recupEmail, recupPassword, connection, disconnection } = loginSlice.actions
export default loginSlice.reducer 