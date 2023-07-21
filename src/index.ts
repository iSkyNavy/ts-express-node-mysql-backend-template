import { AddressInfo } from 'net';
import http from 'http';
import { createServer } from '@config/express';
import { mainConfiguration } from '@mainConfig/main';

const config = mainConfiguration.getConfig();
const host = config.server.host;
const port = config.server.port;

async function startServer() {
    const app = createServer();
    const server = http.createServer(app).listen({ host, port }, () => {
        const addressInfo = server.address() as AddressInfo;
        console.info(
            `Server ready at http://${addressInfo.address}:${addressInfo.port}`,
        );
    });

    const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
    signalTraps.forEach((type) => {
        process.once(type, async () => {
            console.info(`process.once ${type}`);

            server.close(() => {
                console.debug('HTTP server closed');
            });
        });
    });
}

startServer();
