import { Dispatch } from "redux";
import { types } from "./action.types";

export const getMoviesData = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch({
                type: types.SET_MOVIES_DATA,
            });

            const response = await fetch("https://api.themoviedb.org/3/movie/555?api_key=321beb4b2a3b5516445df2806c76a6a7");
            const responseJSON = await response.json();
        }
        catch (error: any) {

        }
    }
}