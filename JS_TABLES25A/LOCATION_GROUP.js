// LOCATION_GROUP.js

window.LOCATION_GROUP = {
  "tables": {
    "LOCATION_GROUP": {
      "columns": {
        "LOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "LOCATION_GROUP_GID contains the unique identifier for the location group. "
        },
        "LOCATION_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "LOCATION_GROUP_XID contains the unique external identifier for the location group. "
        },
        "LOCATION_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "LOCATION_GROUP_NAME contains the name for the location group."
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
        "LOCATION",
        "LOCATION_GROUP_COMPATIBILITY"
      ]
    }
  }
};
