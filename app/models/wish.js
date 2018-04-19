import DS from 'ember-data'

export default DS.Model.extend({
  bow: DS.belongsTo('bow'),
  user: DS.belongsTo('user')
})
