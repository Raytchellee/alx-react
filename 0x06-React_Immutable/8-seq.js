import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const data = Seq(object);

  const passed = data.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function getFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const converted = passed.toJS();

  Object.keys(converted).map((key) => {
    converted[key].firstName = getFirstChar(converted[key].firstName);
    converted[key].lastName = getFirstChar(converted[key].lastName);
    return converted[key];
  });
  console.log(converted);
}
