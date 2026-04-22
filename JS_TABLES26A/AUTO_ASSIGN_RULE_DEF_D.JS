// AUTO_ASSIGN_RULE_DEF_D.js

window.AUTO_ASSIGN_RULE_DEF_D = {
  "tables": {
    "AUTO_ASSIGN_RULE_DEF_D": {
      "description": "Header information for each list within a single auto-assignment to be done in a rule.",
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE_CRITERIA",
          "info": "Auto-assign rule"
},
        "DEFINITION_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE_DEFINITION",
          "info": "sequence within the rule for the actual auto-assignment"
},
        "AUTO_ASSIGN_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE_CRITERIA",
          "info": "Component of the criteria"
},
        "LIST_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "way to process the list of items for the component; O=match one in list; N=match none in list"
},
        "IS_MATCH_ALL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, indicates all values from the business object must pass the rule check. N indicates any match passes the rule."
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
        "AUTO_ASSIGN_RULE_DEF_D_LIST"
]
    }
  }
};