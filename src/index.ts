// index for app

import expressApp from './express/express';

expressApp.listen(3000, () => {
    console.log(`express sever running in port: ${3000}`);
});
