import Mixin from '@ember/object/mixin';
import { inject } from '@ember/service';

export default Mixin.create({
    flashMessages: inject(),
    getCookie(cname) {
        let name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    createEvent(isCookie, noteType, note) {
        var sample_event_properties = {
            'Note name': note,
            'email': isCookie
        };
        var event_name = noteType;
        freshsales.trackEvent(event_name, sample_event_properties);
    }
});
