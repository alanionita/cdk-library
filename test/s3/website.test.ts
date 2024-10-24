import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Website } from '../../src/s3/website';

let app: App;
const constructName: string = 'Website';

test(`${constructName} Construct snapshot`, ():void => {
  const stack: Stack = new Stack(app, `${constructName}TestStack`);
  new Website(stack, 'Test');
  const template: Template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});