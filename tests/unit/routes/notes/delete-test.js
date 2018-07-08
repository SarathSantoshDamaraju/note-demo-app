import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | notes/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:notes/delete');
    assert.ok(route);
  });
});
