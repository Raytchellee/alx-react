import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  const firstList = List(page1);
  const secondList = List(page2);

  return firstList.concat(secondList);
}

export function mergeElements(page1, page2) {
  const firstMap = Map(page1);
  const secondMap = Map(page2);

  return firstMap.merge(secondMap);
}
