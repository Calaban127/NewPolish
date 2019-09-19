//  const Mutations = {
// doesntBelong() {}
//  };
//  =
// rror: Mutation.doesntBelong defined in resolvers, but not in schema
//

const Mutations = {
  createDog(parent, args, ctx, info) {
    //never do this 13-930
    global.dogs = global.dogs || [];
    //create a dog
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
    console.log(args);
  }
};

module.exports = Mutations;
