import { MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your Guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1 
  };

export const actionsReducer = (state = initialState, action) => {
  if (action.type === MAKE_GUESS) {
    return Object.assign({}, state, {
      feedback: action.feedback,
      guesses: [...state.guesses, action.guess]
    })
  }

  else if (action.type === RESTART_GAME) {
    return initialState;
  }

  else if (action.type === GENERATE_AURAL_UPDATE) {
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    })
  }
  return state;
}
