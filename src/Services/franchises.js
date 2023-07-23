import Parse from 'parse';

export const getById = (id) => {
  const Franchise = Parse.Object.extend("Franchise");
  const query = new Parse.Query(Franchise);
  return query.get(id).then((result) => {
    // return Franchise object with objectId: id
    return result;
  });
};

export const getAllFranchises = () => {
  const Franchise = Parse.Object.extend("Franchise");
  const query = new Parse.Query(Franchise);
  return query.find().then((results) => {
    // returns array of Franchise objects
    return results;
  });
};

export const createFranchise = async (franchiseName) => {
  const Franchise = Parse.Object.extend('Franchise');
  const franchise = new Franchise();
  franchise.set('Name', franchiseName);
  await franchise.save();
  return franchise;
};

export const getFranchiseByName = async (franchiseName) => {
  const Franchise = Parse.Object.extend('Franchise');
  const query = new Parse.Query(Franchise);
  query.equalTo('Name', franchiseName);
  const result = await query.first();
  return result;
};
