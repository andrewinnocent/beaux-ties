import DS from 'ember-data'

export default DS.Model.extend({
  bows: DS.hasMany('bow'),
  user: DS.belongsTo('user')
})
