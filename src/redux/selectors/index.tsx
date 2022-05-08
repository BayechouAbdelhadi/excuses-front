import { RootState } from "..";

export const selectExcuse = (state: RootState) => {
        const lastSelectedCode = state.excuses.lastSelectedCode;
        const excuses = state.excuses.excuses;

        let chosen = excuses[Math.floor(Math.random() * excuses.length)];
        while( lastSelectedCode === chosen.http_code )  {
            chosen = excuses[Math.floor(Math.random() * excuses.length)]
        }
        return chosen;
}

export const selectByHttpCode = (httpCode : any) => (state: RootState) => {
        if(httpCode === undefined  || isNaN(parseInt(httpCode))) return undefined;
        httpCode = parseInt(httpCode);
        const excuseIndex = state.excuses.excuses.findIndex(excuse => excuse.http_code === httpCode);

        if( excuseIndex > -1) {
            return state.excuses.excuses[excuseIndex]
        }

        return undefined;
}

