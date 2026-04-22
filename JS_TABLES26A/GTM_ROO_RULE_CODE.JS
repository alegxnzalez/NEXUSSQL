// GTM_ROO_RULE_CODE.js

window.GTM_ROO_RULE_CODE = {
  "tables": {
    "GTM_ROO_RULE_CODE": {
      "description": "Captures data of rules of origin - rule code.",
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
        "GTM_ROO_RULE_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for rules of origin rule code."
},
        "GTM_ROO_RULE_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for rules of origin rule code."
},
        "GTM_ROO_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_ROO_RULE_TYPE",
          "info": "The GID for rules of origin rule type."
},
        "GTM_ROO_RULE_CODE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "The name given to rules of origin rule code."
},
        "SHORT_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The short name given to rules of origin rule code."
},
        "START_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Defines the code level starting range."
},
        "END_CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Defines the code level ending range."
},
        "PERCENTAGE_OPERATOR": {
          "type": "VARCHAR2(2)",
          "nullable": true,
          "values": [
                    "<",
                    ">",
                    "<=",
                    ">=",
                    "="
          ],
          "info": "Stores the percentage operator. The values can be any of  <,>,<=,>=,="
},
        "PERCENTAGE_VALUE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Stores the percentage value."
},
        "EXTERNAL_REFERENCE_CODE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Code that is externally used to identify the rules of origin rule code."
},
        "GTM_RULES_OF_ORIGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_RULES_OF_ORIGIN",
          "info": "The GID for the rules of origin."
}
      },
      "fk_tables": [
        "GTM_ROO_RULE_CODE_DESC"
]
    }
  }
};