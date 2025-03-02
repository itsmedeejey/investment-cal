const express = require('express')
const cors = require('cors');

const app = express();
app.use(cors());
app.get("/intrest",(req,res)=>{
    const p = parseInt(req.query.p)
    const i = parseInt(req.query.i)
    const d = parseInt(req.query.d)

    const t_amount = p*(1+(i/100)*d);
    const t_inrest = t_amount - p;

    res.json({t_amount,t_inrest})

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });