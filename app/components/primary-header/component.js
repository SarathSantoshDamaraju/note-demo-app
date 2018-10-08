import Component from '@ember/component';
import commonEvent from 'notes-app-demo/mixins/common-event';
import { computed } from '@ember/object';
import config from 'notes-app-demo/config/environment';

export default Component.extend(commonEvent, {
    didInsertElement(){
        $('#an-loader').remove();
    },
    firstLetter:computed(function(){
        let newEmail = this.getCookie('appninjauser');
        if(newEmail){
            return newEmail.charAt(0).toLocaleUpperCase();
        }
        return "S"
    }),
    actions: {
        signout(){
            this.deletCookie('appninjauser')
            window.location.href = config.loginURL;
        }
    },
    deletCookie(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

});
