// RATE_LOAD_DEFINITION.js

window.RATE_LOAD_DEFINITION = {
  "tables": {
    "RATE_LOAD_DEFINITION": {
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
        "RATE_LOAD_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "RATE_LOAD_DEFINITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description for the current rate load definition. "
        },
        "TEMPLATE_RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "RATE_OFFERING",
          "info": "Reference to rate offering which acts as template rate offering."
        }
      },
      "fk_tables": [
        "RATE_LOAD_DEFINITION_INV_PARTY",
        "RATE_LOAD_SUMMARY",
        "RATE_LOAD_TAB_DEFINITION",
        "RATE_LOAD_TEMPLATE_RO_D",
        "RATE_LOAD_TEMPLATE_RR_D"
      ]
    }
  }
};
