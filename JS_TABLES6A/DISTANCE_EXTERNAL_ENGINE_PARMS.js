// DISTANCE_EXTERNAL_ENGINE_PARMS.js

window.DISTANCE_EXTERNAL_ENGINE_PARMS = {
  "tables": {
    "DISTANCE_EXTERNAL_ENGINE_PARMS": {
      "columns": {
        "DISTANCE_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DISTANCE_EXTERNAL_ENGINE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "PARM": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Country code for this parameter, or '*' for all."
        },
        "VALUE": {
          "type": "VARCHAR2(120)",
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
        }
      },
      "fk_tables": []
    }
  }
};
