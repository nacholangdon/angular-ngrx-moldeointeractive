import { createAction, props } from '@ngrx/store';

export const inc = createAction('INCREMENTO');
export const dec = createAction('DECREMENTO');
export const random = createAction('RANDOM');
export const saltar = createAction('SALTAR',
  props<{ num: number }>()
);
