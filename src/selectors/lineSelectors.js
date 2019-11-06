import * as fromLines from '../reducers/lineReducer';

export const getAllLines = (state) => state.lines.list;

export const getSelectedLine = (state) => fromLines.getSelectedLine(state.lines);
