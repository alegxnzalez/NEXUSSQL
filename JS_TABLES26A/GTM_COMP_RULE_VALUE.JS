// GTM_COMP_RULE_VALUE.js

window.GTM_COMP_RULE_VALUE = {
  "tables": {
    "GTM_COMP_RULE_VALUE": {
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
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_VALUE_QUALIFIER"
},
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE"
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
},
        "OPERATOR": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CURRENCY_VALUE": {
          "type": "NUMBER",
          "nullable": false
},
        "CURRENCY_VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false
},
        "CURRENCY_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "IS_AGGREGATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "GTM_COMP_RULE_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_COMP_RULE_VALUE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};