// SERVICE_TIME.js

window.SERVICE_TIME = {
  "tables": {
    "SERVICE_TIME": {
      "description": "Associates a timeframe with a rate geo.  For instance, you could specify that it takes 6 hours to get from San Francisco to Los Angeles.  If you would prefer to group lanes together (time estimates don't need to be so specific), then you could create a RATE_ZONE_PROFILE, and then associate lanes together within the RATE_ZONE_PROFILE_D table.  The service time would then be associated in the RATE_ZONE_SERVICE_TIME table.",
      "columns": {
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "X_LANE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_SERVICE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "SERVICE_TIME_VALUE": {
          "type": "NUMBER",
          "nullable": true
},
        "SERVICE_TIME_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "SERVICE_TIME_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "SERVICE_TIME_VALUE in base units."
},
        "SERVICE_DAYS": {
          "type": "NUMBER",
          "nullable": true
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
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};