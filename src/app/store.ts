import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

// Об'єднання редюсерів
const rootReducer = combineReducers({
  users: usersReducer,
  // інші редюсери, якщо є
});

// Визначення типу RootState
export type RootState = ReturnType<typeof rootReducer>;

// Налаштування Redux store
export const store = configureStore({
  reducer: rootReducer,
});

// Експорт типу AppDispatch, якщо потрібно
export type AppDispatch = typeof store.dispatch;
