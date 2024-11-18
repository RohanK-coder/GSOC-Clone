import express from "express";
import { contributor } from "../models/contributorSchema.js";

const router = express.Router();

// GET route: Fetch all contributors
router.get("/", async (req, res) => {
  try {
    const contributors = await contributor.find({});
    return res.status(200).json(contributors);
  } catch (error) {
    return res.status(404).send({
      message: "404 check again",
    });
  }
});

// POST route: Create a new contributor
router.post("/", async (req, res) => {
  const { name, orgName, projectsWorking } = req.body;

  try {
    const newContributor = new contributor({
      name,
      orgName,
      projectsWorking,
    });

    await newContributor.save();
    return res.status(201).json(newContributor);
  } catch (error) {
    return res.status(400).send({
      message: "Failed to create contributor",
      error: error.message,
    });
  }
});

// PUT route: Update an existing contributor by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, orgName, projectsWorking } = req.body;

  try {
    const updatedContributor = await contributor.findByIdAndUpdate(
      id,
      { name, orgName, projectsWorking },
      { new: true, runValidators: true }
    );

    if (!updatedContributor) {
      return res.status(404).send({ message: "Contributor not found" });
    }

    return res.status(200).json(updatedContributor);
  } catch (error) {
    return res.status(500).send({
      message: "Failed to update contributor",
      error: error.message,
    });
  }
});

// DELETE route: Delete a contributor by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContributor = await contributor.findByIdAndDelete(id);

    if (!deletedContributor) {
      return res.status(404).send({ message: "Contributor not found" });
    }

    return res.status(200).send({ message: "Contributor deleted successfully" });
  } catch (error) {
    return res.status(500).send({
      message: "Failed to delete contributor",
      error: error.message,
    });
  }
});

export default router;
