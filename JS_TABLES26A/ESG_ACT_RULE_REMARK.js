// ESG_ACT_RULE_REMARK.js

window.ESG_ACT_RULE_REMARK = {
  "tables": {
    "ESG_ACT_RULE_REMARK": {
      "description": "This table is used for storing the remark qualifier and its value that should exist on the business entity for which the rule has to be applied.",
      "columns": {
        "ESG_ACTIVITY_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY_RULE",
          "info": "The globally unique ID of an emission activity rule."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The remark sequence (key) for the emission activity rule."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "A pointer to the remark qualifier."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A user-entered remark on the emission activity rule."
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