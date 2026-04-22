// LOCATION_OVERRIDE_ADDRESS.js

window.LOCATION_OVERRIDE_ADDRESS = {
  "tables": {
    "LOCATION_OVERRIDE_ADDRESS": {
      "columns": {
        "LOCATION_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_OVERRIDE"
        },
        "LINE_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true
        },
        "OVERRIDE_ADDRESS_LINE": {
          "type": "VARCHAR2(55)",
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
