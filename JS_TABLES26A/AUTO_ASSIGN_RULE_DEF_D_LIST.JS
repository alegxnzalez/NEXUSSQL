// AUTO_ASSIGN_RULE_DEF_D_LIST.js

window.AUTO_ASSIGN_RULE_DEF_D_LIST = {
  "tables": {
    "AUTO_ASSIGN_RULE_DEF_D_LIST": {
      "description": "List of items for each component to determine if the auto-assignment should be done",
      "columns": {
        "AUTO_ASSIGN_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE_DEF_D",
          "info": "Auto assign rule id"
},
        "DEFINITION_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE_DEF_D",
          "info": "Sequence to keep individual assign configurations separate"
},
        "AUTO_ASSIGN_CRITERIA_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AUTO_ASSIGN_RULE_DEF_D",
          "info": "The component of the criteria"
},
        "LIST_SEQUENCE": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Sequence to keep items in list unique"
},
        "VALUE1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Value 1 for the list"
},
        "VALUE2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Value 2 for the list, if needed"
},
        "VALUE1UOM": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "If VALUE1 represents a UOM field (weight, volume, etc.), this field contains the UOM value (LB, CUFT, etc.)"
},
        "VALUE2UOM": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "If VALUE2 represents a UOM field (weight, volume, etc.), this field contains the UOM value (LB, CUFT, etc.)"
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