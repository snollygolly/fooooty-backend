var Schema = {
  bots: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    name: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "Name of the bot"
    },
    position_pref: {
      type: 'string',
      maxlength: 4,
      nullable: false,
      comment: "What position does this botmanager favor"
    },
    ost: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent of games this bot will play the Offside Trap"
    },
    sweeper: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent of games this bot will play a sweeper"
    },
    hardness: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Hardness level this bot plays at"
    }
  },
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
      comment: "ID of the manager who runs this club"
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
    name: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "Name of the club"
    }
  },
  divisions: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    nation_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the nation this division belongs to"
    },
    name: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Full name of the division"
    },
    tier: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of the tier this division is in"
    },
    depth: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Depth within the tier of this division"
    },
    promotion_to: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the next division top teams from this division will be promoted to"
    },
    number_of_clubs: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of clubs in this division"
    },
    regional_location: {
      type: 'string',
      maxlength: 13,
      nullable: false,
      comment: "Breakdown of exact geographical location within nation of this division"
    }
  },
  games: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    status: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Plaintext status of the game"
    },
    home_club_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the home club"
    },
    away_club_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "ID of the away club"
    },
    start_date: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "The in game day this game should be played"
    },
    home_score: {
      type: 'integer',
      defaultTo: 0,
      nullable: false,
      unsigned: true,
      comment: "Score of the home club"
    },
    away_score: {
      type: 'integer',
      defaultTo: 0,
      nullable: false,
      unsigned: true,
      comment: "Score of the away club"
    },
    winner_club_id: {
      type: 'integer',
      nullable: true,
      unsigned: true,
      comment: "The ID of the club that won"
    },
    loser_club_id: {
      type: 'integer',
      nullable: true,
      unsigned: true,
      comment: "The ID of the club that lost"
    },
    game: {
      type: 'text',
      nullable: true,
      comment: "JSON encoded recap of the game"
    }
  },
  groups: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    name: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Full name of the group"
    }
  },
  managers: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    name: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "Name of this manager"
    },
    cpu: {
      type: 'boolean',
      nullable: false,
      defaultTo: true,
      comment: "If this manager is controlled by a CPU"
    },
    bot_id: {
      type: 'integer',
      nullable: true,
      unsigned: true,
      comment: "ID of the bot who runs this manager"
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
    name: {
      type: 'string',
      maxlength: 255,
      nullable: false,
      comment: "Name of this stadium"
    },
    regional_location: {
      type: 'string',
      maxlength: 13,
      nullable: false,
      comment: "Breakdown of exact geographical location within nation of this stadium"
    },
    grass: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Percent health of playing area grass"
    },
    lighting: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Floodlight level of this stadium"
    },
    media: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Quality of media access areas of this stadium"
    },
    parking: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of parking spots in the lot of this stadium"
    },
    capacity: {
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
    manager_id: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "The ID of the manager associated with this user"
    },
    username: {
      type: 'string',
      maxlength: 24,
      nullable: false,
      comment: "Display name of this user"
    },
    email: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Email address of this user"
    },
    password_hash: {
      type: 'string',
      maxlength: 64,
      nullable: false,
      comment: "Hash value of password of this user"
    },
    realname: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Real name of this user"
    },
    bio: {
      type: 'string',
      maxlength: 1000,
      nullable: false,
      comment: "Public bio text input by this user"
    },
    status: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Whether user is active dormant manager director or chairman"
    },
    credits: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of credits in this users account"
    },
    revert: {
      type: 'dateTime',
      nullable: false,
      comment: "Date and time at which this user account reverts back to manager from purchased director or chairman"
    },
    visas: {
      type: 'integer',
      nullable: false,
      unsigned: true,
      comment: "Number of travel visas in this users account"
    },
    cookie_accept: {
      type: 'dateTime',
      nullable: false,
      comment: "Date and time at which this user last accepted the cookie notice"
    }
  },
  zones: {
    id: {
      type: 'increments',
      nullable: false,
      primary: true
    },
    name: {
      type: 'string',
      maxlength: 100,
      nullable: false,
      comment: "Full name of the zone"
    }
  }
};
module.exports = Schema;
