[![React Storybook][view-storybook-image]][view-storybook-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]
[![NPM Publish][npm-publish-action-image]][npm-publish-action-url]

### How to Contribute?

This repo consists of two packages:

1. apps/storybook
   - This is used heavily in local development to view/test components as a component is being developed
2. packages/react
   - This contains all the utils/components and styles

Follow these steps to run the code and start development:

1. Run `yarn install` at root
1. Run `yarn sb` at root -> will run storybook
1. Run `yarn build:watch` -> will build the react package
1. Create a branch for yourself
1. Carry on with your development
1. Once you are done with development, raise a PR

### Publishing

1. Run `yarn changeset` -> Generate your changelogs
2. Push to Github
3. Github Action Workflow will handle from there on

### Maintain

Run `git push --follow-tags` for all tags to be pushed to Github

### Credits:

- https://leerob.io/blog/turborepo-design-system-monorepo
- https://github.com/LukasBombach/tree-shakable-component-library

## License

@reusejs/react is freely distributable under the terms of the [MIT license][license-url].

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/@reusejs/react
[npm-version-image]: https://img.shields.io/npm/v/@reusejs/react.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@reusejs/react.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/@reusejs/react?minimal=true
[npm-publish-action-image]: https://github.com/reusejs/react/actions/workflows/release.yml/badge.svg
[npm-publish-action-url]: https://github.com/reusejs/react/actions/workflows/release.yml
[view-storybook-image]: https://img.shields.io/badge/View-Storybook-F59E0B.svg
[view-storybook-url]: https://react.reusejs.org
