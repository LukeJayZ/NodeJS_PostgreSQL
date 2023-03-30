const { Router } = require("express");
const pool = require("./db");

const router = Router();

// Select all users

router.get("/user", async (req, res) => {
  try {
    const {rows} = await pool.query("SELECT* from users");
    res.json({data:rows});
  } catch (err) { console.log(err.message)
    res.sendStatus(500);
  }
});

// Select one user by id

router.get("/user/:id", async (req, res) => {
  
    const {id} = req. params;
    try {
      const {rows} = await pool.query('SELECT* FROM users WHERE id=$1', [id]);
      res.json({data: rows})
  } catch (err) {
    res.sendStatus(404);
  }
});

// Create a new user

router.post("/user", async(req, res)=> {
  const{firstname, lastname, age}=req.body;
  try{
    const{rows} = await pool.query ("INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *",
    [firstname, lastname, age]
    );
    res.json ({ data: rows});
  } catch(err){
    res.sendStatus(403)
  }
  res.end ();
})


module.exports = router;