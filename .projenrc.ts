import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Alan Ionita',
  authorAddress: '105461667+alanionita@users.noreply.github.com',
  description: 'Opinionated CDK constructs to support best practice and quick development',
  name: '@alanionita/cdk-library',
  keywords: ['constructs', 'library'],
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/alanionita/cdk-library.git',
  npmAccess: NpmAccess.PUBLIC,
  npmProvenance: false,
  githubOptions: {
    mergify: false,
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const exclusions: string[] = ['.env'];
project.gitignore.exclude(...exclusions);
project.npmignore!.exclude(...exclusions);
project.synth();