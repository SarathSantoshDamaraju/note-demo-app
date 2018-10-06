import Route from '@ember/routing/route';
import commonEvent from 'notes-app-demo/mixins/common-event';

export default Route.extend(commonEvent, {
    model(){
        let isCookie = this.getCookie('appninjauser') || undefined;
        return this.store.query('note',{orderBy: 'userId', equalTo: isCookie})
    }
});
