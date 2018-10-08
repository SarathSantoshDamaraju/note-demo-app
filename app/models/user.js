import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    company: DS.attr('string'),
    username: DS.attr('string'),
    restoreId: DS.attr('string')
});
