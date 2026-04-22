// MATCH_VAL_RULE_INVOICE_REFNUM.js

window.MATCH_VAL_RULE_INVOICE_REFNUM = {
  "tables": {
    "MATCH_VAL_RULE_INVOICE_REFNUM": {
      "description": "Invoice reference numbers specified in this table must exist on the invoice for the validation rule to be tested",
      "columns": {
        "MATCH_VALIDATION_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MATCH_VALIDATION_RULE",
          "info": "If the invoice reference numbers in this table are on the invoice, this validation rule will be tested"
},
        "INVOICE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_REFNUM_QUAL",
          "info": "Qualifier for the invoice reference number that must exist on the invoice for this validation rule to be used"
},
        "INVOICE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "Value for the invoice reference number that must exist on the invoice for this validation rule to be used"
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