const {dispatch, getMessage, dealMessage, getMyFeedBack, deleteMessage} = require("../../controller/message");

module.exports = (router) => {
    router.post('/message/dispatch', dispatch);
    router.post('/message/getMessage', getMessage);
    router.post('/message/dealMessage', dealMessage);
    router.get('/message/getMyFeedBack', getMyFeedBack);
    router.post('/message/deleteMessage', deleteMessage)
};
