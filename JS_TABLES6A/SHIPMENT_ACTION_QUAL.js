// SHIPMENT_ACTION_QUAL.js

window.SHIPMENT_ACTION_QUAL = {
  "tables": {
    "SHIPMENT_ACTION_QUAL": {
      "columns": {
        "SHIPMENT_ACTION_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SHIPMENT_ACTION_QUAL_XID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "SHIPMENT_ACTION_QUAL_DESC": {
          "type": "VARCHAR2(101)",
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
        "SHIPMENT_ACTIONS"
      ]
    }
  }
};
