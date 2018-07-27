import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('notes', function() {
    this.route('new');
    this.route('edit', { path: ':note_id/edit' });
    this.route('delete', { path: ':note_id/delete' });
  });
  this.route('dashboard', { path: '/'});
  this.route('task');
});

export default Router;
