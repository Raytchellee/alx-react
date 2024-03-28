import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const data = fromJS(object);
  return data.getIn(array, undefined);
}
