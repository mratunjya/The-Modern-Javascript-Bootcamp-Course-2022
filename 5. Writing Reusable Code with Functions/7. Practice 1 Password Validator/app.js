// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

const username = 'dogLuvr';
const password = '89Fjj1nms';

isValidPassword = (password, username) => {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(' ')) {
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}

console.log(isValidPassword(password, username));