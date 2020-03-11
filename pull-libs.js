// TODO: include jquery and stuff; maybe even update script tags in html, with CDN URLs, integrity checksums, and fallbacks

const {copySync} = require("fs-extra");
const {basename, join} = require("path");

const copy = (from, toDir)=> {
	const to = join(toDir, basename(from));
	console.log(`Copying ${from} => ${to}`);
	copySync(from, to);
};

copy("node_modules/os-gui/build/windows-98.css", "lib/os-gui/");
copy("node_modules/os-gui/build/windows-98.css.map", "lib/os-gui/");
copy("node_modules/os-gui/build/layout.css", "lib/os-gui/");
copy("node_modules/os-gui/build/layout.css.map", "lib/os-gui/");
copy("node_modules/os-gui/build/windows-default.css", "lib/os-gui/");
copy("node_modules/os-gui/build/windows-default.css.map", "lib/os-gui/");
copy("node_modules/os-gui/build/peggys-pastels.css", "lib/os-gui/");
copy("node_modules/os-gui/build/peggys-pastels.css.map", "lib/os-gui/");
copy("node_modules/os-gui/parse-theme.js", "lib/os-gui/");
copy("node_modules/browserfs/dist/browserfs.js", "lib/");
copy("node_modules/browserfs/dist/browserfs.js.map", "lib/");
copy("node_modules/browserfs/dist/browserfs.min.js", "lib/");
copy("node_modules/browserfs/dist/browserfs.min.js.map", "lib/");
copy("node_modules/webamp/built/webamp.bundle.js", "programs/winamp/lib/");
copy("node_modules/webamp/built/webamp.bundle.min.js", "programs/winamp/lib/");
copy("node_modules/webamp/built/webamp.bundle.min.js.map", "programs/winamp/lib/");
copy("node_modules/butterchurn/lib/butterchurn.min.js", "programs/winamp/lib/");
copy("node_modules/butterchurn-presets/lib/butterchurnPresets.min.js", "programs/winamp/lib/");

console.log(`Done.

Note: This script doesn't handle updating npm dependencies, it just copies scripts into the repo.`);
