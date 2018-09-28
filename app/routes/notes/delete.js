import Route from '@ember/routing/route';
import { get } from '@ember/object';
import commonEvent from 'notes-app-demo/mixins/common-event';

export default Route.extend(commonEvent, {
    model(params){
        return this.store.findRecord('note', params.note_id)
    },
    actions:{
        deleteRecord(note){
            const flashMessages = get(this, 'flashMessages');
            
            let isCookie = this.getCookie('appninjauser') || undefined,
                noteName = note.get('title');
            note.deleteRecord()
            note.save()
                .then(() =>{
                    if(isCookie){
                        this.createEvent(isCookie, "Delete note", noteName);
                    }
                    this.transitionTo('notes');
                    flashMessages.success('Note deleted successfully!',{
                        string: "Success"
                      });
                }).catch(() =>{

                });
        },
        willTransition() {
            this._super(...arguments);
            this.get('controller.model').rollbackAttributes();
        }
    }
});
