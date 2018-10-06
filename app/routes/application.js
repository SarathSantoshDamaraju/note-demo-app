import Ember from 'ember';
import commonEvent from 'notes-app-demo/mixins/common-event';

export default Ember.Route.extend(commonEvent, {
    model(){
        let isCookie = this.getCookie('appninjauser') || undefined;
        if(isCookie){
            return this.store.query('user',{orderBy: 'email', equalTo: isCookie})
        }else{
            return null
        }
    },
    afterModel(model, controller){
        if(model){
            return true
        }else{
            window.location.href = "http://localhost:6677/login.html"
        }
        
    }
  
});