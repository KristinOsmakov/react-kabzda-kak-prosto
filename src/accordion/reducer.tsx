type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // const stateCope = {...state}
            // state.collapsed = !state.collapsed;
            // return stateCope;
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error("Bad action type")
    }
    return state;
}
