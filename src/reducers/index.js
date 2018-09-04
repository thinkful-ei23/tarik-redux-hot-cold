import { MAKE_GUESS, RESTART_GAME } from '../actions';

const initialState = {
  guesses: [],
  currentGuess: '',
  feedback: 'Make your Guess!',
  secretNumber: Math.floor(Math.random() * 100) + 1 
  };

export const actionsReducer = (state = initialState, action) => {
  if (action.type === MAKE_GUESS) {
    if (isNaN(action.guess)|| action.guess > 100 || action.guess < 0) {
      alert('Please enter a valid number');
      return state;
    } 
    
    else if (action.guess > 100 || action.guess < 0) {
      alert('Please choose a number between zero and 100');
      return state;
    } 
    
    else if (state.guesses.length > 0) {
      let feedback;
      state.guesses.forEach(guess => {
        if (action.guess === guess) {
          alert('You guessed this number already');
          feedback = true;
        }
      });
      if (feedback) {
        return state;
      }
    }

    const difference = Math.abs(action.guess - state.secretNumber);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, action.guess]
    })
  }

  else if (action.type === RESTART_GAME) {
    return initialState;
  } 
  return state;
}
