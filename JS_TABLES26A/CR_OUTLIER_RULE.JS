// CR_OUTLIER_RULE.js

window.CR_OUTLIER_RULE = {
  "tables": {
    "CR_OUTLIER_RULE": {
      "description": "CR Project rules for defining outliers for Cooperative Routing aggregation.",
      "columns": {
        "CR_OUTLIER_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_OUTLIER_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CR_OUTLIER_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CR_OUTLIER_RULE_TYPE",
          "info": "Denotes type of outlier rule."
},
        "FACTOR1": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Input 1 for the rule type."
},
        "FACTOR2": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Input 2 for the rule type."
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
        "CR_PROJECT_OUTLIER_RULE"
]
    }
  }
};