"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("../data/books"));
class BooksController {
    constructor() {
        this.path = "/books";
        this.router = express_1.default.Router();
        this.books = books_1.default;
        this.initializeRoutes = () => {
            this.router.get(this.path, (req, res) => {
                res.status(200).json({ data: books_1.default });
            }, this.router.post(this.path, (req, res) => {
                let book = req.body;
                this.books.push(book);
                res.status(201).json({ data: book });
            }), this.router.put(this.path, (req, res) => {
                const bookId = req.params.id;
                const book = req.body;
                try {
                    let updBook = this.books.find((item) => item.id = bookId);
                    books_1.default;
                }
                catch (err) {
                }
            }));
        };
        this.initializeRoutes();
    }
}
exports.default = BooksController;
