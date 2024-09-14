import { createContext, Dispatch, SetStateAction } from "react";

export interface AppData {
  search: string
  offset: number
}

interface IAppContext {
  appData: AppData | null
  setAppData: Dispatch<SetStateAction<AppData | null>>
}

export const AppContext = createContext<IAppContext>({} as IAppContext)
