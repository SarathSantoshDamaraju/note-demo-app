import Ember from 'ember';
import commonEvent from 'notes-app-demo/mixins/common-event';
import config from 'notes-app-demo/config/environment';

export default Ember.Route.extend(commonEvent, {
  model() {
    let isCookie = this.getCookie('appninjauser') || undefined;
    if (isCookie) {
      return this.store.query('user', { orderBy: 'email', equalTo: isCookie })
    } else {
      return null
    }
  },
  afterModel(model, controller) {
    if (model) {
      this.initFreshChat(model.get('firstObject'));
      this.initUser(model.get('firstObject'));
      return true
    } else {
      window.location.href = config.loginURL
    }
  },
  initFreshChat(session) {
    window.fcWidget.init({
      token: "87cc47b8-bbdc-4cd5-aacd-e4f8a57765c5",
      host: "https://wchat.freshchat.com",
      externalId: session.get('id'),
      email: session.get('email'),
      firstName: session.get('username'), // user's first name
      lastName: session.get('username'), // user's first name
      email: session.get('email'),    // user's email address
      restoreId: session.get('restoreId') ? session.get('restoreId') : null
    });
  },
  initUser(session) {
    window.fcWidget.user.get(function(resp) {
      var status = resp && resp.status,
          data = resp && resp.data;
      if (status !== 200) {
        window.fcWidget.user.setProperties({
          firstName: session.get('username'), // user's first name
          lastName: session.get('username'), // user's first name
          email: session.get('email'),    // user's email address
          plan: "Estate",                 // user's meta property 1
          status: "Active",               // user's meta property 2
          "Last Payment": "12th August"   // user's meta property 3
        });
        window.fcWidget.on('user:created', function(resp) {
          var status = resp && resp.status,
              data = resp && resp.data;
          if (status === 200) {
            if (data.restoreId) {
              session.set('restoreId', data.restoreId);
              session.save();
            }
          }
        });
      }
    });
  }
})