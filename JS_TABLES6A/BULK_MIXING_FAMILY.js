// BULK_MIXING_FAMILY.js

window.BULK_MIXING_FAMILY = {
  "tables": {
    "BULK_MIXING_FAMILY": {
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
        "BULK_MIXING_FAMILY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "User defined id for the Bulk Mixing Family "
        },
        "BULK_MIXING_FAMILY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BULK_MIXING_FAMILY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Bulk Mixing Family Name "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description for the bulk Mixing Family"
        }
      },
      "fk_tables": [
        "PACKAGED_ITEM"
      ]
    }
  }
};
