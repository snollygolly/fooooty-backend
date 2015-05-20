var Schema = {
  clubs: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    manager_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the manager who owns this club"
    },
    stadium_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the stadium this club belongs to"
    },
    division_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the division this club belongs to"
    },
    divisional_position: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Position within the division this club belongs to"
    },
    nation_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the nation this club belongs to"
    },
    name: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "Name of the club"
    }
  },
  nations: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    name: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "Name of the nation"
    },
    size: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "The size of the nation"
    },
    group_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the group this club belongs to"
    },
    zone_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the zone this club belongs to"
    },
    duration: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "How long is an in-game day (in minutes)"
    },
    slug: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "URL friendly/shortened name of the nation"
    },
    tiers: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    divisions_per_tier: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    },
    clubs_per_division: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unknown"
    }
  },
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
      maxlength: 32,
      nullable: false,
      comment: "First name of the player"
    },
    last_name: {
      type: 'string',
      maxlength: 32,
      nullable: false,
      comment: "Last name of the player"
    },
    suffix: {
      type: 'string',
      maxlength: 8,
      nullable: false,
      comment: "Jr Sr (Suffix)"
    },
    age: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Age of the player, in sessions"
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
      comment: "Skill level of the player"
    },
    super_skill: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Unique player ability, if any"
    },
    position: {
      type: 'string',
      maxlength: 4,
      nullable: false,
      comment: "What position does this player play"
    },
    oop: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of matches played this session Out Of Position"
    },
    dp: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of discilinary points this player has accrued"
    },
    suspended: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of games this player has been suspended due to excessive DP"
    },
    health: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent of full health this player has"
    },
    auction_type: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Which auction this player is listed in, if any"
    },
    auction_price: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Current auction price for this player"
    }
  },
  botmanagers: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    botmanager_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the manager who owns this club"
    },
    bot_position_pref: {
      type: 'string',
      maxlength: 4,
      nullable: false,
      comment: "What position does this botmanager favor"
    },
    bot_OST: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent of games this bot will play the Offside Trap"
    },
    bot_sweeper: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent of games this bot will play a sweeper"
    },
    bot_hardness: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Hardness level this bot plays at"
    }
  },
  defaults: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    default_zones: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of zones when creating a new instance of the game"
    },
    default_groups: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of groups when creating a new instance of the game"
    },
    default_speeds: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Default zone speeds in minutes"
    },
    default_tiernames: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Default names for tiers within a nation"
    },
    default_separators: {
      type: 'string',
      maxlength: 200,
      nullable: false,
      comment: "Default separator names for tiers within a nation"
    },
    images_path: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Path to image directory"
    },
    data_path: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Path to data directory"
    }
  },
  divisions: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    division_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the division"
    },
    division_name: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Full name of the division"
    },
    division_tier: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of the tier this division is in"
    },
    division_depth: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Depth within the tier of this division"
    },
    division_promotion_to: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the next division top teams from this division will be promoted to"
    },
    division_number_of_clubs: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of clubs in this division"
    },
    division_regionalLocation: {
      type: 'string',
      maxlength: 13,
      nullable: false,
      comment: "Breakdown of exact geographical location within nation of this division"
    }
  },
  groups: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    group_id: {
      type: 'string',
	  maxlength: 4,
      nullable: false,
      comment: "ID letter of the group"
    },
    group_name: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Full name of the group"
    }
  },
  zones: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    zone_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the zone left to right slow to quick"
    },
    zone_name: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Full name of the zone"
    }
  },
  stadiums: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    nation_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the nation who owns this stadium"
    },
    stadium_regionalLocation: {
      type: 'string',
      maxlength: 13,
      nullable: false,
      comment: "Breakdown of exact geographical location within nation of this stadium"
    },
    stadium_grass: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent health of playing area grass"
    },
    stadium_lighting: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Floodlight level of this stadium"
    },
    stadium_media: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Quality of media access areas of this stadium"
    },
    stadium_parking: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of parking spots in the lot of this stadium"
    },
    stadium_capacity: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Maximum number of fans this stadium can hold"
    }
  },
  users: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    username: {
      type: 'string',
      maxlength: 24,
      nullable: false,
      comment: "Display name of this user"
    },
    user_email: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Email address of this user"
    },
    user_passwordHash: {
      type: 'string',
      maxlength: 64,
      nullable: false,
      comment: "Hash value of password of this user"
    },
    user_realname: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Real name of this user"
    },
    user_bio: {
      type: 'string',
      maxlength: 1000,
      nullable: false,
      comment: "Public bio text input by this user"
    },
    user_status: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Whether user is active dormant manager director or chairman"
    },
    user_credits: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of credits in this users account"
    },
    user_revert: {
      type: 'dateTime',
      nullable: false,
      comment: "Date and time at which this user account reverts back to manager from purchased director or chairman"
    },
    user_visas: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of travel visas in this users account"
    },
    user_cookieAccept: {
      type: 'dateTime',
      nullable: false,
      comment: "Date and time at which this user last accepted the cookie notice"
    }
  }
};
module.exports = Schema;
