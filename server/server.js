require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.get((req,res)=>{
  console.log("Server is running...")
})

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
