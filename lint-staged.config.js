module.exports = {
  "**/*.(ts|tsx)": () => "bun tsc --noEmit",

  "**/*.(ts|tsx|js)": (filenames) => [
    `bun eslint --fix --resolve-plugins-relative-to ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
