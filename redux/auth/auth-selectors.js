import { createSelector } from 'reselect';
import _ from 'lodash';

const getUser = state => state.user;

// usage:
//
// import { isAdmin } from '@redux/selectors';
//
// const mapStateToProps = state => {
//   return {
//     isAdmin: isAdmin(state)
//   }
// };
export const isAdmin = createSelector(
  [getUser],
  (user) => {
    return _.includes(user.roles, 'admin');
  }
);

// usage:
//
// import { isInRole } from '@redux/selectors';
//
// const mapStateToProps = state => {
//   return {
//     isSomething: isInRole(state, 'something')
//   }
// };
export const isInRole = (state, role) => {
  const selector = createSelector(
    [getUser],
    (user) => {
      return _.includes(user.roles, role);
    }
  );
  return selector(state);
};
