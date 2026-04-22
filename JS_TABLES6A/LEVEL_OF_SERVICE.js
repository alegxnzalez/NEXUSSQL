// LEVEL_OF_SERVICE.js

window.LEVEL_OF_SERVICE = {
  "tables": {
    "LEVEL_OF_SERVICE": {
      "columns": {
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
        "LEVEL_OF_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LEVEL_OF_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        }
      },
      "fk_tables": [
        "LOCATION",
        "RO_LANE_SPECIAL_SERVICE",
        "SHIPMENT"
      ]
    }
  }
};
