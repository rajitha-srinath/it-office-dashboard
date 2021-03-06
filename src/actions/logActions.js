import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT } from './types'

export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('./logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

export const deleteLogs = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        
        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// export const updateLogs = (log) => async dispatch => {
//     try {
//         setLoading();
//         await fetch(`/logs/${log.id}`, {
//             method: 'PUT',
//             body: JSON.stringify(log),
//             headers
//         });
        
//         dispatch({
//             type: DELETE_LOG,
//             payload: id
//         });

//     } catch (err) {
//         dispatch({
//             type: LOGS_ERROR,
//             payload: err.response.data
//         });
//     }
// };

export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};