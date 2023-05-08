const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "increment" });
}

store.dispatch({ type: "decrement" }); // decrement the counter by 1

// console.log(store.getState()); // { counter: 4 }

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "decrement" });
}
