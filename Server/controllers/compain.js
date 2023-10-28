const Compain = require("../models/compain");

const createCompain = async (req, res) => {
  try {
    const compain = await Compain.create(req.body);
    res.send({ compain });
  } catch (error) {
    res.send(error);
  }
};
const editCompain = async (req, res) => {
  try {
    const isExist = await Compain.findById(req.params.id);
    if (!isExist) {
      res.send("there is no compain with that id");
    }
    const editedCompain = await Compain.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send({ compain: editedCompain });
  } catch (error) {
    res.send(error);
  }
};
const deleteCompain = async (req, res) => {
  try {
    const isExist = await Compain.findById(req.params.id);
    if (!isExist) {
      res.send("there is no compain with that id");
    }
    await Compain.findByIdAndDelete(req.params.id);
    res.send(`compain wiith id ${isExist?._id} is deleted`);
  } catch (error) {
    res.send(error);
  }
};
const getCompain = async (req, res) => {
  try {
    const isExist = await Compain.findById(req.params.id)
      .lean()
      .populate("contributors owner");
    if (!isExist) {
      res.send("there is no compain with that id");
    }
    res.send({ compain: isExist });
  } catch (error) {
    res.send(error);
  }
};
const getCompains = async (req, res) => {
  try {
    const compains = await Compain.find().lean().populate("contributors owner");
    res.send({ compains });
  } catch (error) {
    res.send(error);
  }
};

const contributeToCompain = async (req, res) => {
  try {
    const { price, compainId, userId } = req.body;
    const compain = await Compain.findById(compainId);
    if (!compain) {
      res.send("there is no compain with that id to contribute to");
    }
    const updatedCompain = await Compain.findByIdAndUpdate(
      { _id: compainId },
      {
        $inc: { currentPrice: price },
        $addToSet: { contributors: userId },
      },
      { new: true }
    );
    res.send({ compain: updatedCompain });
  } catch (error) {
    res.send(error);
  }
};

const myContributions = async (req, res) => {
  const userId = req.params.id;
  const contributions = await Compain.find({ contributors: userId })
    .lean()
    .populate("contributors owner");

  if (contributions?.length === 0) {
    res.send("you still dont contributed to any compain");
  }
  res.send({
    count: contributions?.length,
    compains: contributions,
  });
};

module.exports = {
  createCompain,
  editCompain,
  deleteCompain,
  getCompain,
  getCompains,
  contributeToCompain,
  myContributions,
};
