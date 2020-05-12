const {dispatch, getMessage} = require("../../controller/message");

module.exports = (router) => {
    router.post('/message/dispatch', dispatch);
    router.post('/message/getMessage', getMessage);
};
