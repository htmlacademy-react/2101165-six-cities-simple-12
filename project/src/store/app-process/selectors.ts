import { Namespace } from '../../const';
import { City } from '../../types/offer';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[Namespace.App].city;
