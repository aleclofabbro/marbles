export type Action<ActionMap> = {
  [P in keyof ActionMap]: { a: P, p: ActionMap[P] }
}[keyof ActionMap]

export type ReducerMap<State, ActionMap> = {
  [P in keyof ActionMap]: (prev: State, p: ActionMap[P]) => State
}


export const mappedReducer = <State, ActionMap>(reducerMap: ReducerMap<State, ActionMap>) => (prev: State, action: Action<ActionMap>): State =>
  reducerMap[action.a](prev, action.p)
