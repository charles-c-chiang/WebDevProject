import Parse from 'parse';

export const getById = (id) => {
  const Character = Parse.Object.extend('Character');
  const query = new Parse.Query(Character);
  return query.get(id).then((result) => {
    return result;
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

export const createCharacter = async (characterData) => {
  const Character = Parse.Object.extend('Character');
  const newCharacter = new Character();

  for (let key in characterData) {
    if (key === 'franchisePointer') {
      const franchisePointer = characterData[key];
      newCharacter.set('Franchise_Pointer', franchisePointer);
    } else {
      newCharacter.set(key, characterData[key]);
    }
  }

  try {
    await newCharacter.save();
  } catch (error) {
    throw new Error(`Failed to save Character: ${error.message}`);
  }
};

export const getAllCharacters = () => {
  const Character = Parse.Object.extend('Character');
  const query = new Parse.Query(Character);
  return query.find().then((results) => {
    return results;
  });
};

export const update = async (character) => {
  try {
    await character.save();
  } catch (error) {
    throw new Error(error);
  }
};

export const removeCharacter = async (character) => {
  try {
    await character.destroy();
  } catch (error) {
    throw new Error(error);
  }
};

export const removeFranchise = async (franchiseId) => {
  const Franchise = Parse.Object.extend('Franchise');
  const franchise = new Franchise();
  franchise.id = franchiseId;

  try {
    await franchise.destroy();
  } catch (error) {
    throw new Error(error);
  }
};

export const getCharactersByFranchiseId = async (franchiseId) => {
  const Character = Parse.Object.extend('Character');
  const query = new Parse.Query(Character);
  const franchisePointer = new Parse.Object('Franchise');
  franchisePointer.id = franchiseId;
  query.equalTo('Franchise_Pointer', franchisePointer);
  const results = await query.find();
  return results;
};
