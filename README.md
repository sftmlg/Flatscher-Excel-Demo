# GAP Analysis Tool - Module 1

A tool powered by Next.js, designed to automate the analysis of domains and domain portfolios, facilitating upselling and assisting customers in safeguarding their brand identities across various domains and regions.

![GAP Analysis Tool Screenshot](gap-analysis-tool.jpg 'Screenshot of the GAP Analysis Tool')

## Key Features

- **Domain Analysis**: Analyze available and registered domains related to the input brand, including recommended brands and common misspellings.
- **Spreadsheet Generation**: Generate a detailed spreadsheet or CSV file with information about available and existing domains, associated owners, and other relevant data.
- **Recommendations**: Provide AI-based recommendations for domains similar to the original brand.
- **Pricing Integration**: Display the cost of registering available domains using existing pricing APIs.
- **Typo Analysis**: Suggest additional domains based on common typos and variations of the input brand or keyword.
- **Geographic TLD Segmentation**: Segment domain recommendations based on user-specified TLD-oriented regions.

## Getting Started

### Environment Variables

In order to authenticate requests to the APIs, add the following values to your `.env` file:

- API_URL
- API_KEY
- PRICING_API_URL
- PRICING_API_KEY

Rename the `.env.example` file to `.env` and add the necessary values.

### Dependencies

To install the necessary dependencies, run:

```bash
yarn
```

The application should be up and running on [http://localhost:3000](http://localhost:3000).

## Development

### Node

It is recommended to use the Node version listed in the `.nvmrc` file. We recommend using [nvm](https://github.com/nvm-sh/nvm) to easily switch between Node versions.

### Husky & Git Hooks

This repository uses [Husky](https://github.com/typicode/husky) to enforce commit hooks.

The config for both the `pre-commit` and `pre-push` hooks can be found in the `.husky` folder, located in the root of the project.

#### Pre-commit

Before allowing a commit, the TypeScript compiler (`tsc`) and `lint-staged` script will be run to enforce all ESLint and Prettier rules on staged files.

#### Pre-push

The same tasks are run for pre-push as for pre-commit.

#### Overriding the Husky Git Hooks

To bypass the `pre-commit` or `pre-push` hooks, pass a `--noVerify` flag to your Git commands. Use this only if you understand the implications.

### API Integration

This project uses custom APIs for domain and pricing data retrieval.

API calls are made using `axios` or similar HTTP clients, with the base URLs and keys specified in the environment variables.

### GraphQL & Code Generation

We use `graphql-codegen` to generate a type-safe API client.

#### Commands

To (re-)generate the GraphQL schema, types, and SDK, use the following commands:

```bash
yarn graphql-codegen:generate
yarn graphql-codegen:watch
```


The generated files will be located in the `src/lib/__generated` folder and should be committed to the repository.

### Configuration

The configuration for the codegen can be found in `codegen.ts`, located in the root of the project.

## Deployment

The application can be deployed to your hosting provider of choice.

We offer integrations with Vercel and Netlify to speed up the process. Click one of the deploy buttons below to get started. The GitHub repository and necessary environment variable keys are pre-configured in the hosting provider space.

| Vercel | Netlify |
|--------|---------|
| [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcontentful%2Fdomain-gap-analysis&env=API_URL,API_KEY,PRICING_API_URL,PRICING_API_KEY&envDescription=API%20Keys%20needed%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Fcontentful%2Fdomain-gap-analysis%23environment-variables) | [![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fcontentful%2Fdomain-gap-analysis#API_URL=&API_KEY=&PRICING_API_URL=&PRICING_API_KEY=) |

Make sure to add the necessary [environment variables](#environment-variables) to the hosting provider's environment settings.

<!-- ## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT License, see [LICENSE](./LICENSE). -->
