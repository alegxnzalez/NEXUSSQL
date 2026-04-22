// INVOICE_SPLIT_RULE.js

window.INVOICE_SPLIT_RULE = {
  "tables": {
    "INVOICE_SPLIT_RULE": {
      "columns": {
        "INVOICE_SPLIT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "INVOICE_SPLIT_RULE_GID is the unique identifier for the INVOICE_SPLIT_RULE "
        },
        "INVOICE_SPLIT_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "INVOICE_SPLIT_RULE_XID is the unique external identifier for the INVOICE_SPLIT_RULE "
        },
        "INVOICE_SPLIT_RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "INVOICE_SPLIT_RULE_NAME contains the name of the rule for splitting invoice. "
        },
        "INVOICE_SPLIT_RULE_DESC": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "INVOICE_SPLIT_RULE_DESC contains the description about split rule. "
        },
        "INVOICE_SPLIT_RULE_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "I",
            "B"
          ],
          "info": "INVOICE_SPLIT_RULE_TYPE indicates whether this RULE is applicable for a bill or an invoice (valid values are I or B) "
        },
        "INVOICE_SPLIT_RULE_CRITERIA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "L",
            "T",
            "A",
            "O"
          ],
          "info": "Defines the criterion which is the basis for splitting the invoice. Valid Inputs are:L,T,A,O; L represents - Shipment Cost, T represents - Shipment Cost Type, A represents - Shipment Cost Accessorial and O represents - Order Release Allocation."
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
