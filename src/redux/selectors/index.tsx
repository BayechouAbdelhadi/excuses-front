import { RootState } from "..";

export const selectByHttpCode = (httpCode : any) => (state: RootState) => {
        if(httpCode === undefined  || isNaN(parseInt(httpCode))) return undefined;
        httpCode = parseInt(httpCode);
        const excuseIndex = state.excuses.excuses.findIndex(excuse => excuse.http_code === httpCode);

        if( excuseIndex > -1) {
            return state.excuses.excuses[excuseIndex]
        }

        return undefined;
}

export const excuseSelector =  (state: RootState) => {
       return state.excuses.selected;
}

export const excusesSelector =  (state: RootState) => state.excuses.excuses;
