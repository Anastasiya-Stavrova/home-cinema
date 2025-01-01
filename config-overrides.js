import { addBabelPlugins, override } from "customize-cra";
export default override(
  ...addBabelPlugins("@mightymeld/runtime/babel-plugin-mightymeld")
);
