// LNM_DATARULE_INSTANCE.js

window.LNM_DATARULE_INSTANCE = {
  "tables": {
    "LNM_DATARULE_INSTANCE": {
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
          "key_value": true
        },
        "DATARULE_INSTANCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DATARULE_INSTANCE_DESC": {
          "type": "VARCHAR2(1000)",
          "nullable": true
        },
        "DATARULE_DEFINITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LNM_DATARULE_DEF"
        },
        "RULE_INSTANCE_GROUP": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "Usability grouping for data rule instance. "
        },
        "JAVA_RULE_PARAMETERS": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "For JAVA rule type, parameters are specified by the API. Rather than store the parameters in LNM_DATA_RULE_INST_PARAM, where we have no FK into LNM_DATA_RULE_PARAMETER, we store all parameters in a Unix-style command line. It takes the form: -paramName1 paramOp1:paramValue1 -paramName2 paramOp2:paramValue2 ..."
        }
      },
      "fk_tables": [
        "LNM_DATARULE_INS_PRM",
        "LNM_SCENARIO_RULE"
      ]
    }
  }
};
