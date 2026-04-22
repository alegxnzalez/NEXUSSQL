// MATCH_VALIDATION_RULE_SHIPMENT.js

window.MATCH_VALIDATION_RULE_SHIPMENT = {
  "tables": {
    "MATCH_VALIDATION_RULE_SHIPMENT": {
      "columns": {
        "MATCH_VALIDATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MATCH_VALIDATION_RULE",
          "info": "Id of the match validation rule "
        },
        "INVOICE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_REFNUM_QUAL",
          "info": "Invoice refnum qualifier for the values to be validated against the shipment "
        },
        "SHIPMENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT_REFNUM_QUAL",
          "info": "Shipment refnum qualifier for the values to be validated against the indicated invoice refnum"
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
      "fk_tables": []
    }
  }
};
