import express from "express"
import { Router } from "express"
import { organization } from "../models/organizationSchema.js"

const router = express.Router();

//read
router.get("/", async(req,res)=>{
    try {
        const organizations = await organization.find({});
        return res.status(200).json(organizations);
    } catch (error) {

        return res.status(404).send({
            message:"404 server not found or please restart and run properly"
        })
        
    }
})

//create

router.post("/",async(req,res)=>{
    const {name, description, projects, techUsed} = req.body;

    try {
        const newOrganization = new organization({
            name,
            description,
            projects,
            techUsed,
        })

        await newOrganization.save()

        return res.status(201).json(newOrganization)
    } catch (error) {
        return res.status(400).send({
            message:"Failed to create the orgainization properly"
        })
    }
})

//update

router.put("/:id", async (req, res) => {
    const { id } = req.params; // Get the organization ID from the URL
    const { name, description, projects, techUsed } = req.body; // Get the new data from the request body
  
    try {
      // Find and update the organization
      const updatedOrganization = await organization.findByIdAndUpdate(
        id, // Find the organization by its ID
        { name, description, projects, techUsed }, // Update the fields
        { new: true, runValidators: true } // Return the updated document and run validators
      );
  
      if (!updatedOrganization) {
        return res.status(404).send({ message: "Organization not found" });
      }
  
      // Send the updated organization back in the response
      return res.status(200).json(updatedOrganization);
    } catch (error) {
      return res.status(500).send({ message: "Failed to update organization", error });
    }
  });

  //delete
  // Delete an organization
router.delete("/:id", async (req, res) => {
    const { id } = req.params; // Get the organization ID from the URL
  
    try {
      const deletedOrganization = await organization.findByIdAndDelete(id); // Delete the organization by ID
  
      if (!deletedOrganization) {
        return res.status(404).send({ message: "Organization not found" });
      }
  
      // Send a success message if deletion was successful
      return res.status(200).send({ message: "Organization deleted successfully" });
    } catch (error) {
      return res.status(500).send({ message: "Failed to delete organization", error });
    }
  });
  
  
export default router