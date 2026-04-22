// DVE_CALCULATION.js

window.DVE_CALCULATION = {
  "tables": {
    "DVE_CALCULATION": {
      "columns": {
        "DVE_CALCULATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "DVE_CALCULATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "REQUEST_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The GID of the GC3 Shipment which is the basis for this service request. "
        },
        "REQUEST_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date and time of this service request. "
        },
        "RESPONSE_ID": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Not used "
        },
        "RESPONSE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date and time of the response to this service request. "
        },
        "IN_CURRENCY": {
          "type": "CHAR(3)",
          "nullable": false,
          "info": "The currency code for the item declared values in the duty calculation service request. "
        },
        "OUT_CURRENCY": {
          "type": "CHAR(3)",
          "nullable": true,
          "info": "The currency code for the item duty calculation results."
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
        "DVE_CALCULATION_LINE"
      ]
    }
  }
};
