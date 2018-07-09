import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('note');
    },
    actions:{
        sam(note){
            let _this = this;
            // debugger
            note.save()
                .then(function(){
                    _this.transitionTo('notes');
                    console.log("samrrrrr")
                }).catch(function(){

                });
        },
        willTransition() {
            this._super(...arguments);
            this.get('controller.model').rollbackAttributes();
        }
    }
});
