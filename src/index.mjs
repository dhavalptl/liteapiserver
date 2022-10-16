import app from './app.mjs';
import { connectDb } from './config/db.mjs';

// DB Connection
await connectDb();

const PORT = process.env.PORT || 4000;
const SERVERHOST = "0.0.0.0";
const server = app.listen(PORT, SERVERHOST, () => {
    console.log(`🚀 lite api server is started, running on ${PORT} port..`);
});

function shutdown() {
    server.close((error) => {
        if(error) {
            console.error("Error ", error);
            process.exitCode = 1;
        }
        process.exit();
    })
}

process.on("SIGINT", () => {
    console.log("Got SIGNINT signal. Shutdown Successfully", new Date().toISOString());
    shutdown();
});

process.on("SIGTERM", () => {
    console.log("Got SIGTERM signal. Shutdown Successfully", new Date().toISOString());
    shutdown();
});