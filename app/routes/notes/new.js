import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('note');
    },
    actions:{
        sam(note){
            let _this = this;
            let flash = false;
            // debugger
            note.save()
                .then(function(){
                    _this.transitionTo('notes');
                    flash=true;
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
