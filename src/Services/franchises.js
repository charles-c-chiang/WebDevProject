import Parse from 'parse';

export const getById = (id) => {
  const Franchise = Parse.Object.extend("Franchise");
  const query = new Parse.Query(Franchise);
  return query.get(id).then((result) => {
    // return Lesson object with objectId: id
    return result;
  });
};

// READ operation - get all lessons in Parse class Lesson
export const getAllFranchises = () => {
  console.log("finding")
  const Franchise = Parse.Object.extend("Franchise");
  const query = new Parse.Query(Franchise);
  return query.find().then((results) => {
    // returns array of Lesson objects
    console.log("found")
    console.log(results)
    return results;
  });
};