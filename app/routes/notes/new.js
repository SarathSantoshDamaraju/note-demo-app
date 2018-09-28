import Route from '@ember/routing/route';
import { get } from '@ember/object';
import commonEvent from 'notes-app-demo/mixins/common-event';

export default Route.extend(commonEvent, {
  model() {
    return this.store.createRecord('note');
  },
  actions: {
    sam(note) {
      const flashMessages = get(this, 'flashMessages');
      let isCookie = this.getCookie('appninjauser') || undefined,
          noteName = note.get('title');
      note.save()
        .then(() => {
          if(isCookie){
            this.createEvent(isCookie, "Create new note", noteName);
          }
          this.transitionTo('notes');
          flashMessages.success('Note created successfully!',{
            string: "Success"
          });
        }).catch(function (error) {
          // debugger
        });
    },
    willTransition() {
      this._super(...arguments);
      this.get('controller.model').rollbackAttributes();
    }
  }
});
