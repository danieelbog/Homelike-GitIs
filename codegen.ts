import { CodegenConfig } from '@graphql-codegen/cli';
const config: CodegenConfig = {
    schema: [
        {
            'https://api.github.com/graphql': {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer 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'
                }
            }
        }
    ],
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql'
            }
        }
    },
    ignoreNoDocuments: true
};
export default config;
