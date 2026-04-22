// RATE_LOAD_CONFIG.js

window.RATE_LOAD_CONFIG = {
  "tables": {
    "RATE_LOAD_CONFIG": {
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
        "RATE_LOAD_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RATE_LOAD_CONFIG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. "
        },
        "RATE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_GEO",
          "info": "Reference to rate geo GID which acts as template rate geo."
        }
      },
      "fk_tables": [
        "P_CRT_CONFIG",
        "RATE_LOAD_CONFIG_D"
      ]
    }
  }
};
