import Parse from 'parse';

export const getById = (id) => {
  const Character = Parse.Object.extend("Character");
  const query = new Parse.Query(Character);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// READ operation - get all lessons in Parse class Lesson
export const getAllCharacters = () => {
  console.log("finding")
  const Character = Parse.Object.extend("Character");
  const query = new Parse.Query(Character);
  return query.find().then((results) => {
    // returns array of Lesson objects
    console.log("found")
    console.log(results)
    return results;
  });
};
