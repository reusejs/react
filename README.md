### How to Contribute?

This repo consists of two packages:

1. apps/docs
   - This is used heavily in local development to view/test components as a component is being developed
2. packages/react
   - This contains all the utils/components and styles

Follow these steps to run the code and start development:

1. Run `yarn dev`
2. Go into react directory: `cd packages/react` and run `yarn build -w`
3. Carry on with your development

### Publishing

1. Run `yarn changeset` -> Generate your changelogs
2. Push to Github
3. Github Action Workflow will handle from there on

### Maintain

Run `git push --follow-tags` for all tags to be pushed to Github

### Credits:

- https://leerob.io/blog/turborepo-design-system-monorepo
- https://github.com/LukasBombach/tree-shakable-component-library

https://main--62cd742752b02b1186b36ca2.chromatic.com/?path=/story/atoms-labels--default
