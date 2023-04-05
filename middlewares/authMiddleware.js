const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization'); //Verifica el token

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized access. Missing token.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized access. Invalid token.' });
  }
};

module.exports = { authenticateUser };
