import { LOAD_CHART_DATA } from './chartActions';
import {ChartData} from '../src/main'
import { AnyAction } from '@reduxjs/toolkit';

const initialState : ChartData = {
    labels: [],
    datasets: [],
};

const chartReducer = (state = initialState, action:AnyAction ):ChartData => {
    switch (action.type) {
        case LOAD_CHART_DATA:
            return {
                ...state,
                labels: action.payload.labels,
                datasets: action.payload.datasets,
            };
        default:
            return state;
    }
};

export default chartReducer;