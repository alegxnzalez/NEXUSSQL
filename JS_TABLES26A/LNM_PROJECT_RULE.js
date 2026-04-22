// LNM_PROJECT_RULE.js

window.LNM_PROJECT_RULE = {
  "tables": {
    "LNM_PROJECT_RULE": {
      "description": "Stores the modeling project level data rules.",
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
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_PROJECT",
          "info": "Modleing Project ID."
},
        "DATARULE_INSTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_INSTANCE",
          "info": "The Data Rule Instance ID defines the data rules to be applied."
},
        "ROWS_SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SAVED_QUERY",
          "info": "The Saved Query ID determines which objects the data rule should be applied to."
},
        "PROJECT_RULE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The sequence number determines the order in which the data rules are applied."
}
      },
      "fk_tables": []
    }
  }
};