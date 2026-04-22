// RATE_VERSION.js

window.RATE_VERSION = {
  "tables": {
    "RATE_VERSION": {
      "columns": {
        "RATE_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "RATE_VERSION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "RATE_VERSION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "EXPIRATION_DATE": {
          "type": "DATE",
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
        "RATE_OFFERING"
      ]
    }
  }
};
