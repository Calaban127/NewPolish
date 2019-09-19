//we're going to hook ours up to Prisma, but whatever you hook it up
//to - local storage etc. - you're going to but your db calls
//are going to go

const Query = {
  dogs(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};

module.exports = Query;

// return [{ name: "Snickers" }, { name: "Sunny" }];
