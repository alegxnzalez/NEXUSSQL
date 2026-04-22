// LOAD_CONFIG_ENGINE_TYPE.js

window.LOAD_CONFIG_ENGINE_TYPE = {
  "tables": {
    "LOAD_CONFIG_ENGINE_TYPE": {
      "columns": {
        "LOAD_CONFIG_ENGINE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "values": [
            "3D PLACEMENT",
            "PATTERN BASED",
            "VOLUME ESTIMATION",
            "NO LOAD CONFIG",
            "PATTERN BASED OPTIMIZE"
          ],
          "key_value": true
        },
        "LOAD_CONFIG_ENGINE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
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
      "fk_tables": [
        "SHIPMENT"
      ]
    }
  }
};
