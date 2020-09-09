const {startSession} = require('mongoose');

module.exports = callback => {
  return new Promise(async (resolve, reject) => {
    const session = await startSession();
    try{
      await session.startTransaction();
      const res = await callback(session);
      await session.commitTransaction();
      session.endSession();
      resolve(res);
    }catch(err) {
      await session.abortTransaction();
      session.endSession();
      reject(err);
    }
  })
}