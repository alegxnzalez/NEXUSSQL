// LNM_OPERAND.js

window.LNM_OPERAND = {
  "tables": {
    "LNM_OPERAND": {
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
        "OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "OPERAND_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "RESTRICT_TO_FIELD_TYPES": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "List of field types (one character each) that can use the operand. If left null, all field types can use the operand."
        },
        "SQL_RULE_FORMAT": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "OVERRIDE_FIELD_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "S",
            "B",
            "I",
            "N",
            "D",
            "G",
            "U",
            "C",
            "P",
            "L",
            "F",
            "Q",
            "T",
            "X",
            "Y",
            "Z",
            "R"
          ]
        }
      },
      "fk_tables": [
        "LNM_DATARULE_INS_PRM",
        "LNM_DATARULE_PARAM_OP"
      ]
    }
  }
};
