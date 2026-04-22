// P_SOLUTION.js

window.P_SOLUTION = {
  "tables": {
    "P_SOLUTION": {
      "columns": {
        "P_SOLUTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "P_SOLUTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PLANNING_PARAMETER_SET"
        },
        "P_BID_ROUND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "P_BID_ROUND"
        },
        "P_RULE_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "P_RULE_SET"
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
        "P_SOLUTION_D"
      ]
    }
  }
};
