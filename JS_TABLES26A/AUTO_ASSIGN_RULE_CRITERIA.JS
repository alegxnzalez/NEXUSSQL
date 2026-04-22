// AUTO_ASSIGN_RULE_CRITERIA.js

window.AUTO_ASSIGN_RULE_CRITERIA = {
  "tables": {
    "AUTO_ASSIGN_RULE_CRITERIA": {
      "description": "User defined criteria which will be used to determine what information to assign. For example, to determine the shipment involved party, look at the shipment mode, and the service provider.",
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE",
          "info": "Auto-assign rule id"
},
        "AUTO_ASSIGN_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_TYPE_CRIT_MAP",
          "info": "Criteria id that will be used by auto assign logic for this rule"
},
        "AUTO_ASSIGN_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUTO_ASSIGN_TYPE_CRIT_MAP",
          "info": "Single component of the criteria used to choose what to auto-assign"
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
        "AUTO_ASSIGN_RULE_DEF_D"
]
    }
  }
};