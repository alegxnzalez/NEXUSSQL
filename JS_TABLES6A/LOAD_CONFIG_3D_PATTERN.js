// LOAD_CONFIG_3D_PATTERN.js

window.LOAD_CONFIG_3D_PATTERN = {
  "tables": {
    "LOAD_CONFIG_3D_PATTERN": {
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
        "LOAD_CONFIG_3D_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOAD_CONFIG_3D_PATTERN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOAD_CONFIG_3D_PATTERN_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        }
      },
      "fk_tables": [
        "LOAD_CNFG_3D_PATTERN_D"
      ]
    }
  }
};
