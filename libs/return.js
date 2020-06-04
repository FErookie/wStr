exports.code = {
    SUCCESS: 200,
    PARAM_ERROR: 1,
    INVALID_TOKEN: 2,
    MISSING_TOKEN: 3,
    ORDER_ERROR: 4,
    SERVER_ERROR: 5,
};

exports.msgWrapper = (code, data, err) => {
    return {
        code,
        data,
        err
    }
};
