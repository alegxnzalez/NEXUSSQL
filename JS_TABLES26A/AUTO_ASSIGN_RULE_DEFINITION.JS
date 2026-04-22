// AUTO_ASSIGN_RULE_DEFINITION.js

window.AUTO_ASSIGN_RULE_DEFINITION = {
  "tables": {
    "AUTO_ASSIGN_RULE_DEFINITION": {
      "description": "Defines the values for an actual auto-assignment that may take place",
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE",
          "info": "Auto-assign rule id"
},
        "DEFINITION_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence within the rule to separate each auto-assignment"
},
        "USER_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "User defined sequence to run the assign conditions"
},
        "IS_DEFAULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "This rule should be applied if none of the other conditions in the rule pass"
},
        "VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "1st value to auto-assign, when assigning involved parties, may be the contact id"
},
        "VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "2nd value to auto-assign, when assigning involved parties, may be the contact method"
},
        "VALUE3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "3rd value to auto-assign, when assigning involved parties, may be the involved party qualifier"
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