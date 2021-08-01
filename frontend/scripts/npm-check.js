const npmCheck = require('npm-check');

// white-list packages the npm-checker doesnt detect
let whiteListedPackages = [
    // sass modules not required via require or import
    // webpack-loaders since they're not imported via node
    // babel/ts
    'typescript',

    // other packages
];

npmCheck({
    specials: 'webpack,eslint',
    ignoreDev: true,
}).then((currentState) => {
    const unusedPackages = currentState
        .get('packages')
        .filter((pkg) => pkg.unused)
        .filter((pkg) => !whiteListedPackages.includes(pkg.moduleName));

    if (unusedPackages.length > 0) {
        // error output for script
        console.error("You've packages installed which are not in use:\n");
        unusedPackages.forEach((pkg) =>
            console.log(`* ${pkg.moduleName} ${pkg.installed} ${pkg.devDependency ? '(dev)' : ''}`),
        );
        console.error("\nPlease remove from project or whitelist them in 'scripts/npm-check.js' if really requried\n");
        process.exit(1);
    }
});
