import User from "../models/User.js";

// 1) 유저 관련 (Join, Login, Logout) Controllers
export const postJoin = async (req, res) => {
  const {
    email,
    password,
    passwordConfirm,
    montlyBudget,
    savingGoal,
  } = req.body;
  try {
    // 입력한 비밀번호가 서로 같을 경우에만 가입할 수 있다.
    if (password === passwordConfirm) {
      const user = await new User({
        email,
        password,
        montlyBudget,
        savingGoal,
      });
      // DB에 유저 정보를 저장한다.
      user.save();
      return res.json({
        joinSucess: true,
      });
    } else {
      return res.json({
        joinSucess: false,
        message: "비밀번호가 서로 다릅니다",
      });
    }
  } catch (err) {
    // 예외처리 1) 이메일이 중복됐을 경우
    if (err.keyPattern) {
      return res.json({
        joinSucess: false,
        errorMessage: "이메일이 중복됩니다.",
      });
    }
    return res.json(err);
  }
};

// async를 써서, 비동기 콜백을 기다렸다 값을 할당한다.
export const postLogin = async (req, res) => {
  const { email, password, passwordConfirm } = req.body;
  try {
    if (password === passwordConfirm) {
      // DB에서 해당 이메일로 저장된 정보를 조회한다.
      const user = await User.findOne({ email });
      user.comparePassword(password, (err, isMatch) => {
        if (err) return res.json(err);
        if (!isMatch) {
          return res.json({
            LoginSucess: false,
            message: "비밀번호가 틀립니다",
          });
        } else {
          // 토큰을 생성하여, 쿠키에 저장해줄 것.
          user.generateToken();
          return res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ LoginSucess: true, userId: user._id, jwt: user.token });
        }
      });
    } else {
      return res.json({
        LoginSucess: false,
        message: "입력하신 비밀번호가 서로 다릅니다",
      });
    }
  } catch (err) {
    throw err;
  }
};

export const getLogOut = (req, res) => {
  try {
    User.findByIdAndUpdate(req.user._id, { token: "" });
    return res.status(200).send({
      success: true,
    });
  } catch (err) {
    return res.json({ sucess: false, err });
  }
};

// 2) 사용자 인증 처리 Controllers
export const getAuth = (req, res) => {
  return res.json({
    success: true,
    _id: req.user._id,
    isAuth: true,
    montlyBudget: req.user.montlyBudget,
    savingGoal: req.user.savingGoal,
  });
};

// 5) 사용자정보 RU Controller

export const getUserInfo = (req, res) => res.send("getUserInfo");
export const editUserInfo = (req, res) => res.send("editUserInfo");