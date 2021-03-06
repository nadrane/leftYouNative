import React from 'react';
import axios from 'axios';
import { tunnelIP } from '../TUNNELIP';

/* --------------    ACTION CONSTANTS    ---------------- */

const ADD_EGG = 'ADD_EGG';
const SELECT_EGG = 'SELECT_EGG';
const FETCH_EGGS = 'FETCH_EGGS';

/* --------------    ACTION CREATORS    ----------------- */

const selectEgg = egg => ({ type: SELECT_EGG, egg });
const fetchEggs = eggs => ({ type: FETCH_EGGS, eggs });

/* ------------------    REDUCER    --------------------- */

const initialState = {
    allEggs: [],
    selectedEgg: {},
}

export default function (state = initialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_EGG:
            newState.allEggs = [...newState.allEggs, action.egg];
            break;
        case SELECT_EGG:
            newState.selectedEgg = action.egg;
            break;
        case FETCH_EGGS:
            newState.allEggs = action.eggs;
            break;
        default:
            return state;
    }

    return newState;
}

/* --------------    THUNKS/DISPATCHERS    -------------- */
export const setSelectedEgg = eggId => dispatch => {
  axios.get(`${tunnelIP}/api/egg/${eggId}`)
  .then(res => dispatch(selectEgg(res.data)))
  .catch(err => console.error('Problem setting egg', err));
};

export const fetchAllEggs = userId => dispatch => {
    axios.get(`${tunnelIP}/api/egg/user/${userId}`)
    .then(res => dispatch(fetchEggs(res.data)))
    .catch(err => console.error('Problem fetching eggs', err));
}