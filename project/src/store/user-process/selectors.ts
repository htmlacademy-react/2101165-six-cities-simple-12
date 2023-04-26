import { AuthorizationStatus } from '../../const';
import { Namespace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getUserData = (state: State): UserData | null => state[Namespace.User].userInfo;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Namespace.User].authorizationStatus;
