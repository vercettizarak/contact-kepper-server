//Import and initialise router
const express = require('express');
const router = express.Router();

/************
 * GET
 */
// @router  GET api/contacts
// @desc    Get all users contacts
//@access   Private
router.get('/', (req, res) => {
  res.send('Get all users contacts');
});

/************
 * POST
 */
// @router  POST api/contacts
// @desc    Add new contact
//@access   Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

/************
 * PUT
 */
// @router  PUT api/contacts/:id
// @desc    Update contact
//@access   Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

/************
 * DELETE
 */
// @router  DELETE api/contacts/:id
// @desc    Delete contact
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Update contact');
});

module.exports = router;
