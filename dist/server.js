"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const convertMipsToBinary_1 = require("./services/convertMipsToBinary");
dotenv_1.default.config();
const executeTask = async () => {
    const result = await (0, convertMipsToBinary_1.convertMipsFile)();
    return result;
};
executeTask();
