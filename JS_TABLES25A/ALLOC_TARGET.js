// ALLOC_TARGET.js

window.ALLOC_TARGET = {
  "tables": {
    "ALLOC_TARGET": {
      "columns": {
        "ALLOC_TARGET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ALLOC_TARGET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID. E.g. OrderRelease, OrderReleaseLine "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "CLASS_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The Specific java class name that represents and performs operations for this object."
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "ALLOCATION_RULE_DETAIL",
        "ALLOC_METHOD",
        "ALLOC_METRIC"
      ]
    }
  }
};
