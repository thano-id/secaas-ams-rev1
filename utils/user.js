import { registerFunction } from '@plasmicapp/react-web/lib/host';
// import pkg from '@plasmicapp/react-web/lib/host';
// const { registerFunction } = pkg;

import { setString, setObject, getString, getObject, remove } from './localStorage.js';

const loggedIn = function (jwt, user) {
    console.log(`user::loggedIn ${jwt} -> ${user}`);
    setString("jwt", jwt);
    setObject("user", user);
};
registerFunction(loggedIn, {
    namespace: 'user',
    name: 'loggedIn',
    importPath: './utils/user.js',
    params: [
        {
            name: 'jwt',
            type: 'string',
        },
        {
            name: 'user',
            type: 'object',
        },
    ],
});
console.log('--user::loggedIn function registered!');

const loggedOut = function () {
    console.log(`user::loggedOut`);
    remove("jwt");
};
registerFunction(loggedOut, {
    namespace: 'user',
    name: 'loggedOut',
    importPath: './utils/user.js',
});
console.log('--user::loggedOut function registered!');

const clear = function () {
    console.log(`user::clear`);
    remove("jwt");
    remove("user");
};
registerFunction(clear, {
    namespace: 'user',
    name: 'clear',
    importPath: './utils/user.js',
});
console.log('--user::clear function registered!');

const isLoggedIn = function () {
    const jwt = getString("jwt");
    const isLoggedIn = jwt != undefined && jwt != null && jwt != "";
    console.log(`user::isLoggedIn ${jwt} -> ${isLoggedIn}`);
    return isLoggedIn;
};
registerFunction(isLoggedIn, {
    namespace: 'user',
    name: 'isLoggedIn',
    importPath: './utils/user.js',
    returnValue: {
        type: 'boolean',
    },
});
console.log('--user::isLoggedIn function registered!');

const getJwt = function () {
    const jwt = getString("jwt");
    console.log(`user::getJwt -> ${jwt}`);
    return jwt;
};
registerFunction(getJwt, {
    namespace: 'user',
    name: 'getJwt',
    importPath: './utils/user.js',
    returnValue: {
        type: 'string',
    },
});
console.log('--user::getJwt function registered!');

const getAuthHeader = function () {
    const authHeader = "Bearer " + getString("jwt");
    console.log(`user::getAuthHeader -> ${authHeader}`);
    return authHeader;
};
registerFunction(getAuthHeader, {
    namespace: 'user',
    name: 'getAuthHeader',
    importPath: './utils/user.js',
    returnValue: {
        type: 'string',
    },
});
console.log('--user::getJwt function registered!');

const getUser = function () {
    const user = getObject("user");
    console.log(`user::getUser -> ${user}`);
    return user;
};
registerFunction(getUser, {
    namespace: 'user',
    name: 'getUser',
    importPath: './utils/user.js',
    returnValue: {
        type: 'object',
    },
});
console.log('--user::getUser function registered!');

export { loggedIn, loggedOut, clear, isLoggedIn, getJwt, getUser };
