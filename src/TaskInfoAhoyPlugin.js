import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import reducers, { namespace } from './states';
import ExampleTaskComponent from './components/ExampleTaskComponent';

const PLUGIN_NAME = 'TaskInfoAhoyPlugin';

export default class TaskInfoAhoyPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    // The options supplied tell Flex to put our new content ABOVE the other content in the task info panel
    // we could have used the .replace() mthod instead of .add() if we didn't want to keep the existing content
    const options = { sortOrder: -1 };
    flex.TaskInfoPanel.Content.add(<ExampleTaskComponent key="example-task-component"/>, options);
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
