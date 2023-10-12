import { failMe } from './lib/codeLib';
import { failMe as faileMe2 } from './lib/codeLib2';
import { writeFile } from './lib/file';

function codeTest() {
    console.log('This is a bit of a test and a change here');
    console.log(' The password is "f4k3"');
    failMe('Oh Come on');
    faileMe2('and again code repetition here');
    writeFile('some contents for a file');
}

codeTest();