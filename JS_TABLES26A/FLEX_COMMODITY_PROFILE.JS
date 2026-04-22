// FLEX_COMMODITY_PROFILE.js

window.FLEX_COMMODITY_PROFILE = {
  "tables": {
    "FLEX_COMMODITY_PROFILE": {
      "description": "This table is used to resolve the many-to-many relationship between the flex commodity profiles and the qualifiers.",
      "columns": {
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "FLEX_COMMODITY_PROFILE_GID contains the unique identifier for the flex commodity."
},
        "FLEX_COMMODITY_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "FLEX_COMMODITY_PROFILE_XID contains the unique external identifier for the flex commodity."
},
        "FLEX_COMMODITY_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "FLEX_COMMODITY_PROFILE_NAME contains the name of the flex commodity."
},
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FLEX_COMMODITY_QUAL",
          "info": "FLEX_COMMODITY_QUAL_GID contains the unique identifier for the flex commodity qualifier."
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
        "ACTIVITY_TIME_DEF",
        "APPT_RULE_SET",
        "CONSOL",
        "DM_RULE",
        "EQUIP_GROUP_AVG_TA_DURATION",
        "FLEX_COMMODITY_PROFILE_D",
        "LEG_FLEX_COMMOD_PLIST",
        "LOCATION_CAPACITY_GROUP_D",
        "LOCATION_RESOURCE",
        "LOCATION_ROLE_PROFILE_CAL",
        "RATE_GEO",
        "RATE_OFFERING",
        "SECONDARY_CHARGE_RULE"
]
    }
  }
};