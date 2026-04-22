// ERPC.js

window.ERPC = {
  "tables": {
    "ERPC": {
      "columns": {
        "ERPC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The unique Eastern Region Presidents Commission Code. "
        },
        "ERPC_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The Eastern Region Presidents Commission Code. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The Description of the Eastern Region Presidents Commission Code."
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
        "LOCATION"
      ]
    }
  }
};
