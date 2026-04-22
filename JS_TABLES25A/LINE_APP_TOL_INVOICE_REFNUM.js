// LINE_APP_TOL_INVOICE_REFNUM.js

window.LINE_APP_TOL_INVOICE_REFNUM = {
  "tables": {
    "LINE_APP_TOL_INVOICE_REFNUM": {
      "columns": {
        "LINE_APPROVE_TOLERANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LINE_APPROVE_TOLERANCE",
          "info": "For the invoice reference numbers specified, this is the rule they are attached to "
        },
        "REFNUM_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence for uniqueness of multiple qual/value combinations "
        },
        "INVOICE_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOICE_REFNUM_QUAL",
          "info": "If specified with a corrsponding value, the qual-value combination must exist on the invoice in order for the rule to be tested.  If no value is specified, only the qualifier must exist on the invoice "
        },
        "INVOICE_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Optional invoice refnum value; if specified, the value and its corresponding qualifier must exist on the invoice in order to test the rule"
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
