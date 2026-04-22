// BILL_TO_PARTY_ASSIGNMENT.js

window.BILL_TO_PARTY_ASSIGNMENT = {
  "tables": {
    "BILL_TO_PARTY_ASSIGNMENT": {
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
        "BILL_TO_PARTY_ASSIGNMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Contains the unique identifier for the bill_to_party_assignment "
        },
        "BILL_TO_PARTY_ASSIGNMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Contains the unique external identifier for the bill_to_party_assignment "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description "
        },
        "BILL_TO_INV_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The involved party qualifier ID, to be used as bill to."
        }
      },
      "fk_tables": [
        "BILL_TO_PARTY_ASSIGNMENT_D",
        "INVOICE_SPLIT_RULE"
      ]
    }
  }
};
