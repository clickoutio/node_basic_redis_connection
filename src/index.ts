import server from "./server";

// Constants
const serverStartMsg = "Express server started on port: ";
const port = process.env.PORT || 3000;

// Start server
const runningServer = server.listen(port, () =>{});

export default runningServer;
