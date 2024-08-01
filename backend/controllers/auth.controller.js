import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (
      !fullName ||
      !userName ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const male = `https://avatar.iran.liara.run/public/boy?username=${userName}`;

    const female = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? male : female,
    });

    if (newUser) {
      // Jwt token
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid user data." });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user.id,
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie ("jwt","",{maxAge:0});
    res.status(200).json({message: "Logout sucessful"});

  }catch(error){
    console.log("error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
