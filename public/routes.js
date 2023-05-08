"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send("<h2>EXPRESS-TS server running </h2>");
});
exports.router.get('/other', (req, res) => {
    res.send("<p>other route for EXPRESS-TS server  </p>");
});
exports.router.post('/calc', (req, res) => {
    const { a, b } = req.body;
    console.log(a, typeof a, b);
    if (a && b && typeof a === 'number' && typeof b === 'number') {
        res.json({
            success: true,
            message: a + b,
        });
    }
    else {
        res.json({
            success: false,
            message: 'Missing parameters',
        });
    }
});
