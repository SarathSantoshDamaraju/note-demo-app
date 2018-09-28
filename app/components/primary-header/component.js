import Component from '@ember/component';
import commonEvent from 'notes-app-demo/mixins/common-event';
import { computed } from '@ember/object';

export default Component.extend(commonEvent, {
    firstLetter:computed(function(){
        let newEmail = this.getCookie('appninjauser');
        if(newEmail){
            return newEmail.charAt(0).toLocaleUpperCase();
        }
        return "S"
    })
});
