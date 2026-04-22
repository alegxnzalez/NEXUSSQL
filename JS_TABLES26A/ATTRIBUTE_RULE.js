// ATTRIBUTE_RULE.js

window.ATTRIBUTE_RULE = {
  "tables": {
    "ATTRIBUTE_RULE": {
      "description": "Represents an attribute rule",
      "columns": {
        "ATTRIBUTE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ATTRIBUTE_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "RULE_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false,
          "info": "Holds identifier to uniquely define a type of rule. This column should be used to get rules linked to specific rule type. For example, all status rules shall have the value 'STATUS' for this column. This way, column could be used to show only rules of the required type in UI."
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(80)",
          "nullable": false
},
        "LOGIC_OPERATOR": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "values": [
                    "AND",
                    "OR"
          ]
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
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Description for Attribute rule."
}
      },
      "fk_tables": [
        "ATRL_SS_JOIN",
        "ATTRIBUTE_RULE_DETAIL",
        "COMPLEX_EXPRESSION_DETAIL"
]
    }
  }
};