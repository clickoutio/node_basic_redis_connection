import server from "./server";

// Constants
const serverStartMsg = "Express server started on port: ";
const port = process.env.PORT || 3000;

// Start server
const runningServer = server.listen(port, () =>{
    console.log("v10:05");
    console.log("Environment: " + process.env.NODE_ENV);
    console.log("Redis Url: " +   process.env.REDIS_URL);
    console.log("Express Server started on port: " + port);
});

export default runningServer;
