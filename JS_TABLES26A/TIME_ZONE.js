// TIME_ZONE.js

window.TIME_ZONE = {
  "tables": {
    "TIME_ZONE": {
      "description": "This table is used to define the various time zones across the countries. This is used to schedule shipments and also to achieve full globalization in the GC3. It works with the Time_Zone_Locale table to identify the countries, states and cities that are part of the defined time zones.",
      "columns": {
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "TIME_ZONE_GID contains the unique identifier for a time zone. Examples include Australia/Sydney and Europe/Istanbul."
},
        "TIME_ZONE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "TIME_ZONE_XID contains the unique external identifier for the time zone."
},
        "TIME_ZONE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "TIME_ZONE_NAME contains the name of the time zone used for localization."
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
        "ADHOC_NOTIFY",
        "CONTACT",
        "DM_TRANSACTION",
        "IE_SHIPMENTSTATUS",
        "IE_SS_STOP",
        "LOCATION",
        "MISSING_TIME_ZONE",
        "ORDER_RELEASE_STATUS_HISTORY",
        "TIME_ZONE_LOCALE"
]
    }
  }
};