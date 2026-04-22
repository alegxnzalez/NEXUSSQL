// GTM_FORMULA_EXPRESSION.js

window.GTM_FORMULA_EXPRESSION = {
  "tables": {
    "GTM_FORMULA_EXPRESSION": {
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
        "GTM_FORMULA_EXPRESSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Gid. "
        },
        "GTM_FORMULA_EXPRESSION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Unique Formula Expression. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the Formula Expression. "
        },
        "EXPRESSION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Name of the Expression. "
        },
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_OBJECT_TYPE"
        },
        "USAGE_TYPE": {
          "type": "VARCHAR2(2)",
          "nullable": false,
          "values": [
            "F",
            "E"
          ],
          "info": "Expression (E=a+b)or Formula (a+b) "
        },
        "EXPRESSION": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": [
        "EMISSION_RULE",
        "GTM_FORMULA_EXP_IDENTIFIER",
        "GTM_ROO_RULE_TYPE",
        "GTM_RULE_RESTRICTION",
        "GTM_TA_DEPENDENT_FORMULA",
        "GTM_TA_ROO_FORMULA",
        "GTM_TRADE_AGREEMENT",
        "GTM_TRANSACTION_VALUE",
        "GTM_TRANS_LINE_VALUE",
        "QF_RVC_METHOD"
      ]
    }
  }
};
