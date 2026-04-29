const cp = require('child_process');
try {
  console.log(cp.execSync('git status').toString());
} catch(e) {
  console.error(e.message);
}
