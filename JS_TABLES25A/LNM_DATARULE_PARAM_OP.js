// LNM_DATARULE_PARAM_OP.js

window.LNM_DATARULE_PARAM_OP = {
  "tables": {
    "LNM_DATARULE_PARAM_OP": {
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
        "DATARULE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_PARAM"
        },
        "PARAMETER_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_PARAM"
        },
        "VALID_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Valid operand for the parameter."
        }
      },
      "fk_tables": []
    }
  }
};
