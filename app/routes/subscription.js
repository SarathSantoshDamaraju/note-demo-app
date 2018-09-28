import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        sub() {
            window.fcWidget.open({ name: "subscription" });
            window.fcWidget.track('cancel_subscription', {
                //Key and value can be anything relatable to your web app.
                cartValue: 100,
                lastItemCategory: 'subscription'
              });
            // alert("sam")
        }
    }
});
