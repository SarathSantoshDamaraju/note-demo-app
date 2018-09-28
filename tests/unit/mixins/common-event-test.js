import EmberObject from '@ember/object';
import CommonEventMixin from 'notes-app-demo/mixins/common-event';
import { module, test } from 'qunit';

module('Unit | Mixin | common-event', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CommonEventObject = EmberObject.extend(CommonEventMixin);
    let subject = CommonEventObject.create();
    assert.ok(subject);
  });
});
