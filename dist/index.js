"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.seedingData = exports.repository = exports.seeder = exports.ServiceModel = exports.UserModel = exports.RoleServiceModel = exports.RoleModel = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var entity_1 = require("./entity");
Object.defineProperty(exports, "RoleModel", { enumerable: true, get: function () { return entity_1.RoleModel; } });
Object.defineProperty(exports, "RoleServiceModel", { enumerable: true, get: function () { return entity_1.RoleServiceModel; } });
Object.defineProperty(exports, "UserModel", { enumerable: true, get: function () { return entity_1.UserModel; } });
Object.defineProperty(exports, "ServiceModel", { enumerable: true, get: function () { return entity_1.ServiceModel; } });
var repository_1 = require("./repository");
exports.repository = repository_1.default;
var seeder_1 = require("./seeder");
exports.seeder = seeder_1.default;
function seedingData(config, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            connectToDatabase(config)
                .then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, callback(connection)];
                });
            }); })
                .catch(function (error) { return console.log(error); });
            return [2 /*return*/];
        });
    });
}
exports.seedingData = seedingData;
function connectToDatabase(config) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, typeorm_1.createConnection)({
                        host: config.database_host,
                        username: config.database_username,
                        port: config.database_port,
                        password: config.database_password,
                        database: config.database_name,
                        type: config.database_dialect,
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=index.js.map