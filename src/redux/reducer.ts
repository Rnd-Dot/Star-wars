import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type HistoryState = {
    itemsName: Array<string>
}

const initialState: HistoryState = {
    itemsName: []
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setItemName: (state , action: PayloadAction<string>) => {
            state.itemsName.push( action.payload )
        }
    }
})

export const { setItemName } = historySlice.actions
export default historySlice.reducer