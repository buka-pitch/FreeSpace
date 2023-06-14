const express = require("express");
const uid = require("uid");
var MongoDBStore = require("connect-mongodb-session");

function UserManager(req, res, next) {
    if (req.sessionID) {
        console.log("session found");
        console.log(req.sessionID);

        next();
    } else {
        console.log("session not found generatin a session");
        let id = GenerateSession();
        //req.session.id = id;
        next();
    }
}

function GenerateSession() {
    let sessionId = uid.uid(21);
    console.log(sessionId);
    return sessionId;
}
module.exports = UserManager;
