var Schema = {
  players: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  }
};
module.exports = Schema;
