import * as Env from './modules/env';
import * as Loader from './modules/loader';

Env.loadEnvVars();
Loader.setAlias();

import * as Server from '@modules/server';
import * as Database from '@modules/database';

Database.connect();
Server.run();
