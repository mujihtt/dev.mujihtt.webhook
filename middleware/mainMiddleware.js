const { execFile, exec } = require("child_process");

module.exports = async (req, res, next) => {
  const { error, stdout, stderr } = await execFile(
    __dirname,
    "/command/pull.sh"
  );

  console.log("stdout:", stdout);
  console.log("stderr:", stderr);

  next();
};
