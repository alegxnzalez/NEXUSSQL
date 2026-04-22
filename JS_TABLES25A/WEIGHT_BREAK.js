// WEIGHT_BREAK.js

window.WEIGHT_BREAK = {
  "tables": {
    "WEIGHT_BREAK": {
      "columns": {
        "WEIGHT_BREAK_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "WEIGHT_BREAK_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "WEIGHT_BREAK_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "WEIGHT_BREAK_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "WEIGHT_BREAK_MAX": {
          "type": "NUMBER()",
          "nullable": false
        },
        "WEIGHT_BREAK_MAX_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "WEIGHT_BREAK_MAX_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "WEIGHT_BREAK_MAX in base units."
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
        "RATE_GEO_COST_WEIGHT_BREAK"
      ]
    }
  }
};
