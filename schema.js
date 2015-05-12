var Schema = {
  players: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    club_id: {
      type: 'integer',
      nullable: true,
      unsigned: true,
      comment: "ID of the club this player belongs to"
    },
    nation_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the nation this player belongs to"
    },
    first_name: {
      type: 'string',
      maxlength: 25,
      nullable: false,
      comment: "First name of the player"
    },
    last_name: {
      type: 'string',
      maxlength: 25,
      nullable: false,
      comment: "Last name of the player"
    },
    suffix: {
      type: 'string',
      maxlength: 25,
      nullable: false,
      comment: "Jr Sr (Suffix)"
    },
    age: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Age of the player, in sessions?"
    },
    starting: {
      type: 'boolean',
      nullable: false,
      defaultTo: false,
      comment: "If this player is starting or on the bench"
    },
    level: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    super_skill: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    position: {
      type: 'string',
      maxlength: 3,
      nullable: false,
      comment: "What position does this player play"
    },
    oop: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    dp: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    suspended: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    health: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    auction_type: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    auction_price: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    }
  }
};
module.exports = Schema;
