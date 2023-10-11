const asyncHandler = require("express-async-handler");
const {
  Author,
  validateCreateAuthor,
  validateUpdateAuthor,
} = require("../models/Author.js");

/**
 * @desc   Get all authors
 * @route  /api/authors
 * @method GET
 * @access public
 */
const getAllAuthors = asyncHandler(async (req, res) => {
  let authorList;
  const { pageNumber } = req.query;
  const authorPerPage = 2;
  if (pageNumber) {
    authorList = await Author.find()
      .skip(authorPerPage * (parseInt(pageNumber) - 1))
      .limit(authorPerPage);
  } else {
    authorList = await Author.find();
  }
  res.status(200).json(authorList);
});

/**
 * @desc   Get author by id
 * @route  /api/authors/:id
 * @method GET
 * @access public
 */
const getAuthorById = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (author) {
    res.status(200).json(author);
  }
});

/**
 * @desc   Create new author
 * @route  /api/authors
 * @method POST
 * @access private (only Admin)
 */
const createAuthor = asyncHandler(async (req, res) => {
  const { error } = validateCreateAuthor(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const author = new Author({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nationality: req.body.nationality,
    image: req.body.image,
  });
  const result = await author.save();
  res.status(201).json(result);
});

/**
 * @desc   Update an author
 * @route  /api/authors/:id
 * @method PUT
 * @access private (only Admin)
 */
const updateAuthor = asyncHandler(async (req, res) => {
  const { error } = validateUpdateAuthor(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const author = await Author.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationality: req.body.nationality,
        image: req.body.image,
      },
    },
    { new: true }
  );
  res.status(200).json(author);
});

/**
 * @desc   Delete an author
 * @route  /api/authors/:id
 * @method DELETE
 * @access private (only Admin)
 */
const deleteAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (author) {
    await Author.findByIdAndDelete(req.params.id);
    res.json({ message: "author has been deleted" });
  } else {
    res.json({ message: "author not found" });
  }
});

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
