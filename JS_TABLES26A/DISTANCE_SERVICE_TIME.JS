// DISTANCE_SERVICE_TIME.js

window.DISTANCE_SERVICE_TIME = {
  "tables": {
    "DISTANCE_SERVICE_TIME": {
      "description": "This table is created to allow for GEPS to have a distance band based service commitment Rate Service Type.      Example:  Service Commitment (Weekend Equal 1 Day)            0 to 500 Miles - 3rd Morning         501 to 1,000 Miles - 4th Morning        1,001 to 1,500 Miles - 5th Morning             1,501 to 2,000 Miles - 6th Morning  2,001 to 3,000 Miles - 7th Morning",
      "columns": {
        "RATE_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_SERVICE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DISTANCE_VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "SERVICE_DAYS": {
          "type": "NUMBER",
          "nullable": false
},
        "DISTANCE_VALUE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
},
        "DISTANCE_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "DISTANCE_VALUE in base units."
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
      "fk_tables": []
    }
  }
};