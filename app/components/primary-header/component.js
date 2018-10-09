import Component from '@ember/component';
import commonEvent from 'notes-app-demo/mixins/common-event';
import { computed } from '@ember/object';

export default Component.extend(commonEvent, {
    didInsertElement() {
        $('#an-loader').remove();
    },
    firstLetter: computed(function () {
        let newEmail = this.getCookie('appninjauser');
        if (newEmail) {
            return newEmail.charAt(0).toLocaleUpperCase();
        }
        return "S"
    }),
    actions: {
        signout() {
            this.deletCookie('appninjauser');
            window.location.href = "https://appninja.org/login";
        }
    },
    deletCookie(name) {
        // debugger;
        let i = 0, domain = document.domain, parts = domain.split('.'),
        tmpCookie = "_zg" + (new Date()).getTime();
      while (i < (parts.length - 1) && document.cookie.indexOf(tmpCookie + '='
        + tmpCookie) == -1) {
        domain = parts.slice(-1 - (++i)).join('.');
        document.cookie = tmpCookie + "=" + tmpCookie + ";domain=" + domain + ";";
      }
        // tmpCookie + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+ domain + ";";
    }

});
