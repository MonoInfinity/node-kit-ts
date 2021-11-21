#!/user/bin/env node
const { execSync } = require('child_process');
const runCommand = (cmd) => {
      try {
            execSync(cmd, { stdio: 'inherit' });
      } catch (error) {
            console.log(`Failed to execute ${error}`);
            return false;
      }

      return true;
};

const repoName = process.argv[2];

const gitCheckoutCommand = `git clone --depth 1 https://github.com/MonoInfinity/mono-node-kit-ts.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install yarn -g && yarn install`;

console.log('Cloning the repository');
const checkoutCmd = runCommand(gitCheckoutCommand);
if (!checkoutCmd) process.exit(-1);

console.log('Install all dependencies');
const installCmd = runCommand(installDepsCommand);
if (!installCmd) process.exit(-1);
