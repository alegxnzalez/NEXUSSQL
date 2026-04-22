// COUNTY_OVERRIDE.js

window.COUNTY_OVERRIDE = {
  "tables": {
    "COUNTY_OVERRIDE": {
      "columns": {
        "COUNTY_OVERRIDE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "COUNTY_OVERRIDE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
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
        "COUNTY_OVERRIDE_DETAIL",
        "DISTANCE_EXTERNAL_ENGINE"
      ]
    }
  }
};
