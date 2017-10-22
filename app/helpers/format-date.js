import Ember from 'ember';
import moment from 'moment';

export function formatDate(params/*, hash*/) {
  return moment(params[0]).format(params[1]);
}

export default Ember.Helper.helper(formatDate);
