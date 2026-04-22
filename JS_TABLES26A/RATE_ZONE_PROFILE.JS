// RATE_ZONE_PROFILE.js

window.RATE_ZONE_PROFILE = {
  "tables": {
    "RATE_ZONE_PROFILE": {
      "description": "A valid list of rate zone groupings.  This is then used within the rate_zone_profile_d table to group lanes together.   Example of purpose in which you might want to group lanes:  You may want to associate a timeframe of delivery for your lanes, so you would like to create groupings of lanes that share similar durations of time for delivery.  If you are associating a delivery timeframe within a day's estimation, then the lane from San Franscisco to Los Angeles = 1 day, and the lane from San Franscisco to Sacramento = 1 day.  Rather than entering 1 day for each, these could be put in one profile, and then the profile could state that the timeframe = 1 day.  Another lane could be from San Francisco to Philadelphia, which obviously has its own duration, and therefore would not share the same profile.  The profile's timeframe would be stored in the table RATE_ZONE_SERVICE_TIME.",
      "columns": {
        "RATE_ZONE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_ZONE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_RULE_SET"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "RATE_GEO",
        "RATE_PREFERENCE",
        "RATE_ZONE_PROFILE_D",
        "RATE_ZONE_SERVICE_TIME"
]
    }
  }
};