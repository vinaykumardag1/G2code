const Job = require("../models/jobModel");
const Applicant = require("../models/applicantsModel");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create "uploads/resumes" directory if it doesn't exist
const uploadDir = path.join(__dirname, "../uploads/resumes");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration for PDF uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Multer file filter to accept only PDFs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// Upload middleware
const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "resume"
);

// Create a new job posting
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job posted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Apply for a job
// ****need to upload pdf
// exports.applyForJob = async (req, res) => {
//   try {
//     // const { jobId } = req.params;
//     const { name, email, linkedInProfile, coverLetter, resume, jobId } =
//       req.body; // Remove roleAppliedFor from input

//     if (!name || !email || !linkedInProfile || !resume) {
//       return res
//         .status(400)
//         .json({ message: "All fields are required except roleAppliedFor!" });
//     }

//     const job = await Job.findById(jobId);
//     if (!job) return res.status(404).json({ message: "Job not found!" });

//     // Automatically set roleAppliedFor as job title
//     const roleAppliedFor = job.title;

//     const applicants = Applicant({
//       name,
//       email,
//       linkedInProfile,
//       coverLetter,
//       roleAppliedFor: job.title,
//       resume,
//     });
//     await applicants.save();

//     res.status(200).json({ message: "Application submitted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.applyForJob = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    try {
      const { name, email, linkedInProfile, coverLetter, jobId } = req.body;

      // Validate required fields
      if (!name || !email || !linkedInProfile || !req.file) {
        return res
          .status(400)
          .json({ message: "All fields are required except coverLetter!" });
      }

      const job = await Job.findById(jobId);
      if (!job) return res.status(404).json({ message: "Job not found!" });

      // Store resume file path instead of raw data
      const resumePath = req.file.path;

      const applicant = new Applicant({
        name,
        email,
        linkedInProfile,
        coverLetter,
        roleAppliedFor: job.title, // Automatically set from job title
        resume: resumePath,
      });

      await applicant.save();

      res.status(200).json({ message: "Application submitted successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

// delete single job
exports.deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findByIdAndDelete(jobId);
    if (!job) {
      return res.status(404).json({ message: "job did not found" });
    } else res.status(200).json({ message: "job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const job = await Job.find().sort({ createdAt: -1 }); // Fetch job sorted by newest first
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// fetch all applicants
exports.getAllApplicants = async (req, res) => {
  try {
    const allApplicants = await Applicant.find().sort({ appliedAt: -1 });
    res.status(200).json(allApplicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete applicant by id
exports.deleteApplicant = async (req, res) => {
  try {
    const { applicantId } = req.params;

    const applicant = await Applicant.findByIdAndDelete(applicantId);
    if (!applicant) {
      return res.status(404).json({ message: "applicant did not found" });
    } else res.status(200).json({ message: "applicant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
