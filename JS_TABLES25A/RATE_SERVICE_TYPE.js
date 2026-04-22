// RATE_SERVICE_TYPE.js

window.RATE_SERVICE_TYPE = {
  "tables": {
    "RATE_SERVICE_TYPE": {
      "columns": {
        "RATE_SERVICE_TY": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
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
          "foreign_key": "OTM_RELEASE",
          "info": "OTM Release ID"
        }
      },
      "fk_tables": [
        "RATE_SERVICE"
      ]
    }
  }
};
