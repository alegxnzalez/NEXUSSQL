// MATCH_VALIDATION_RULE_ORDER.js

window.MATCH_VALIDATION_RULE_ORDER = {
  "tables": {
    "MATCH_VALIDATION_RULE_ORDER": {
      "columns": {
        "MATCH_VALIDATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MATCH_VALIDATION_RULE",
          "info": "Id of the validation rule "
        },
        "INVOICE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_REFNUM_QUAL",
          "info": "Values of this invoice refnum qualifier should be validated against values of the order refnum qual or value of an order release field "
        },
        "ORDER_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_REFNUM_QUAL",
          "info": "Indicates the values of the invoice refnum qual specified should be validated against the values of this qualifier on the order release"
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
