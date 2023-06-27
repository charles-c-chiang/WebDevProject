import Parse from 'parse';

const readCompany = async () => {
    const Company = Parse.Object.extend('Company');
    const query = new Parse.Query(Company);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const Name = object.get('Name')
        console.log(Name);
      }
      return query.find().then((results) => {
        return results;
    })

    } catch (error) {
      console.error('Error while fetching Company', error);
    }
  };

  export default readCompany;
// READ operation - get lesson by ID
