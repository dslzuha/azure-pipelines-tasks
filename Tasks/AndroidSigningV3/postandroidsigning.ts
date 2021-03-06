import * as fs from 'fs';
import * as path from 'path';
import * as tl from 'vsts-task-lib/task';

import { ToolRunner } from 'vsts-task-lib/toolrunner';

async function run() {
    try {
        tl.setResourcePath(path.join(__dirname, 'task.json'));
        const keystoreFile: string = tl.getTaskVariable('KEYSTORE_FILE_PATH');
        if (keystoreFile && tl.exist(keystoreFile)) {
            fs.unlinkSync(keystoreFile);
            tl.debug('Deleted keystore file downloaded from the server: ' + keystoreFile);
        }
    } catch (err) {
        tl.warning(tl.loc('DeleteKeystoreFileFailed', err));
    }
}

run();
