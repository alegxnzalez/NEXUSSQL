// EXTERNAL_ENGINE_PARAM_VALUE.js

window.EXTERNAL_ENGINE_PARAM_VALUE = {
  "tables": {
    "EXTERNAL_ENGINE_PARAM_VALUE": {
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
        "PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_ENGINE_PARAM",
          "info": "external engine parameter name "
        },
        "EXTERNAL_ENGINE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_ENGINE_PARAM",
          "info": "type of external engine. "
        },
        "OBJECT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_ENGINE_PARAM",
          "info": "object type. example EDE "
        },
        "VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "value for the external engine parameter "
        },
        "TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "foreign_key": "TRANSLATION",
          "info": "Translation gid to represent the value to the user such as in a picklist. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "description about the parameter value."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
