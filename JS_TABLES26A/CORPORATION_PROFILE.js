// CORPORATION_PROFILE.js

window.CORPORATION_PROFILE = {
  "tables": {
    "CORPORATION_PROFILE": {
      "description": "This table is used to create enumerated groups of corporations. It creates a qualifier for the corporation to group them accordingly. Multiple corporations can be a part of a single or more corporation profiles. This table also stores the compatibility information between corporation profiles.",
      "columns": {
        "CORPORATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "CORPORATION_PROFILE_GID contains the unique identifier for the corporation profile."
},
        "CORPORATION_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "CORPORATION_PROFILE_XID contains the unique external identifier for the coroporation profile."
},
        "CORPORATION_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "CORPORATION_PROFILE_NAME contains the name for the corporation'sprofile."
},
        "IS_COMPATIBLE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "CORPORATION_PROFILE_DETAIL",
        "DRIVER",
        "ITINERARY",
        "RATE_GEO",
        "RATE_OFFERING"
]
    }
  }
};