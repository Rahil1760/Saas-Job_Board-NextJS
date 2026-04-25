import mongoose from "mongoose";

const UserRegistrationSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
            index: true,
        },
        name: {
            type: String,
            sparse: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            enum: ["recruiter", "jobseeker"],
            default: "jobseeker",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.JobSeeker ||
    mongoose.model("JobSeeker", UserRegistrationSchema);