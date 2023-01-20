const LOAD_CHART_DATA = 'LOAD_CHART_DATA';
import { AnyAction } from '@reduxjs/toolkit';
import {ChartData} from '../src/main'

export interface dataAction  {
    type : string ;
    payload : ChartData
}
const loadChartData = (data : ChartData): AnyAction => {
  return { type: LOAD_CHART_DATA, payload: data };
}
export { LOAD_CHART_DATA, loadChartData }
