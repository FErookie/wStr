const {dispatch, getMessage, dealMessage, getMyFeedBack} = require("../../controller/message");

module.exports = (router) => {
    router.post('/message/dispatch', dispatch);
    router.post('/message/getMessage', getMessage);
    router.post('/message/dealMessage', dealMessage);
    router.post('/message/getMyFeedBack', getMyFeedBack);
};
