// LNM_DATARULE_INS_PRM.js

window.LNM_DATARULE_INS_PRM = {
  "tables": {
    "LNM_DATARULE_INS_PRM": {
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
        "DATARULE_INSTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_INSTANCE"
        },
        "PARAMETER_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_DATARULE_PARAM",
          "info": "Data Rule parameter name. "
        },
        "DATARULE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LNM_DATARULE_PARAM"
        },
        "OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LNM_OPERAND",
          "info": "Operand for parameter. "
        },
        "VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Value for parameter."
        }
      },
      "fk_tables": []
    }
  }
};
