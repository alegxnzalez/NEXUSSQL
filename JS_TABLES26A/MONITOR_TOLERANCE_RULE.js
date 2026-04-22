// MONITOR_TOLERANCE_RULE.js

window.MONITOR_TOLERANCE_RULE = {
  "tables": {
    "MONITOR_TOLERANCE_RULE": {
      "columns": {
        "TOLERANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "TOLERANCE_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "TOLERANCE_RULE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
},
        "LEFT_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_OPERAND_D"
},
        "RIGHT_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_OPERAND_D"
},
        "COMPARISON_OPERATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_OPERATOR"
},
        "R_OPER_LOWER_OFFSET": {
          "type": "NUMBER",
          "nullable": true
},
        "R_OPER_LOWER_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "R_OPER_LOWER_OFFSET_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "R_OPER_UPPER_OFFSET": {
          "type": "NUMBER",
          "nullable": true
},
        "R_OPER_UPPER_OFFSET_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "R_OPER_UPPER_OFFSET_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_OPERAND_D"
},
        "TOLERANCE_RULE_TYPE": {
          "type": "VARCHAR2(120)",
          "nullable": false
},
        "LEFT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_TOLERANCE_RULE"
},
        "RIGHT_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MONITOR_TOLERANCE_RULE"
},
        "RULE_RELATIONSHIP": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        "MONITOR_AGENT",
        "MONITOR_TOLERANCE_RULE"
]
    }
  }
};