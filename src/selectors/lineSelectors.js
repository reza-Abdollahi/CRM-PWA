import * as fromLines from '../reducers/lineReducer';

export const getSelectedLine = (state) => fromLines.getSelectedLine(state.lines);
