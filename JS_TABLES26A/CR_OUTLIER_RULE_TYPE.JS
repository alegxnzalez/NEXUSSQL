// CR_OUTLIER_RULE_TYPE.js

window.CR_OUTLIER_RULE_TYPE = {
  "tables": {
    "CR_OUTLIER_RULE_TYPE": {
      "description": "Private table describing rule types for defining outliers for cooperative routing aggregation.",
      "columns": {
        "CR_OUTLIER_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_OUTLIER_RULE_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "JAVA_CLASS": {
          "type": "VARCHAR2(200)",
          "nullable": false
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
        "CR_OUTLIER_RULE"
]
    }
  }
};