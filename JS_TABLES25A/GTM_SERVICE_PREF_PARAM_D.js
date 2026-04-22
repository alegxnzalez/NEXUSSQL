// GTM_SERVICE_PREF_PARAM_D.js

window.GTM_SERVICE_PREF_PARAM_D = {
  "tables": {
    "GTM_SERVICE_PREF_PARAM_D": {
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
        "GTM_SERVICE_PREF_PARAM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_SERVICE_PREF_PARAM",
          "info": "The service preference parameter to which the parameter name and value belongs. "
        },
        "PARAMETER_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "info": "Unique parameter name against which values can be specified. "
        },
        "PARAMETER_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "List of words to exclude from the parameter while screening when service parameter type is Exclude Words."
        }
      },
      "fk_tables": []
    }
  }
};
