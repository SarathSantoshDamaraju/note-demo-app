import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    title: [
        validator('presence', true),
        validator('length', {
            min: 3,
        }),
    ]
});

export default DS.Model.extend(Validations, {
    title: DS.attr('string'),
    description: DS.attr('string')
});
