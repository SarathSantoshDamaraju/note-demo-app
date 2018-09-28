import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        sub() {
            //window.fcWidget.open();
            
            window.fcWidget.track('cancel_subscription', {
                //Key and value can be anything relatable to your web app.
              });
        }
    }
});
