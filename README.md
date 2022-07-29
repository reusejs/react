[![React Storybook][view-storybook-image]][view-storybook-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![MIT License][license-image]][license-url]
[![NPM Publish][npm-publish-action-image]][npm-publish-action-url]

### Disclaimer

We are contributing to this repo heavily on a daily basis. As we are developing components, we are learning new things and updating the spec constantly. So, in case you opt to use some of the components in your projects, please keep yourself updated with the changes. We haven't yet even arrived at code of conduct or guidelines. The documentation is almost non-existent for the components. Having said that, we can't live without this library!

### Why another component library?

1. The components here are built from scratch
2. We (@betalectic)[https://twitter.com/betalectic] advocate reusability and abstraction (mostly for fun apart from all the reasons)
3. The applications we build have drastically different UIs, that means we can't pick one "design" based library and stick to that "look"
4. But, the functionality is common across the applications. So, we wanted a component library which doesn't come in our way when it comes to **styling**
5. And almost all the libraries we explored, advocate "design guidelines" more than functionality of the components
6. The first reason why we did this is to abstract functionality! And at the same time, give ourselves a change the look/feel drastically. That's why we have four ways to style our components.

### Where is this library going?

1. To Places for sure
2. We don't know which all places, but we forsee that this library is not going to be just about components, but also about utilities like BetaForm hook (which you will love!), Form Builder (upcoming) and some abstractions which might sound like magic (but they are not for sure)

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

## Contributors

<a href="https://github.com/reusejs/react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=reusejs/react" />
</a>
