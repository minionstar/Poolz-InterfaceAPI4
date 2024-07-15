import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: [
    {
      "https://api4.poolz.finance/graphql": {
        headers: {
          Authorization: "0x0000000000000000000000000000000000000000"
        }
      }
    }
  ],
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "./src/types/graphql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql"
      }
    }
  },
  ignoreNoDocuments: false
}

export default config
