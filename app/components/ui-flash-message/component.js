import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  flashType: computed('messageType', function() {
    let messageType = this.get('messageType');
    if (messageType === "success") {
      return "fm-icon-success";
    } else {
      return "fm-icon-failure";
    }
  })
});