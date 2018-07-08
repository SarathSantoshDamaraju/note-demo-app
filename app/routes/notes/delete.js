import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.store.findRecord('note', params.note_id)
    },
    actions:{
        deleteRecord(note){
            let _this = this;
            note.deleteRecord()
            note.save()
                .then(function(){
                    _this.transitionTo('notes');
                }).catch(function(){

                });
        },
        willTransition() {
            this._super(...arguments);
            this.get('controller.model').rollbackAttributes();
        }
    }
});
