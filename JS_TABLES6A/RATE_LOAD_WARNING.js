// RATE_LOAD_WARNING.js

window.RATE_LOAD_WARNING = {
  "tables": {
    "RATE_LOAD_WARNING": {
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
        "RATE_LOAD_WARNING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Primary key column for this table. Captures the GID of the rate_load_warning. "
        },
        "RATE_LOAD_WARNING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Captures the xid of the rate_load_warning. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description of the rate load warning."
        }
      },
      "fk_tables": [
        "RATE_LOAD_RO_D_WARNING",
        "RATE_LOAD_RR_D_WARNING"
      ]
    }
  }
};
