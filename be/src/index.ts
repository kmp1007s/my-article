import setUp from './setup';
setUp();

import { ExpressServer } from './server';

const port = Number(process.env.PORT) || 8080;
new ExpressServer(port).start();
