// GTM_SERVICE_PREF_PARAM.js

window.GTM_SERVICE_PREF_PARAM = {
  "tables": {
    "GTM_SERVICE_PREF_PARAM": {
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
          "key_value": true
        },
        "GTM_SERVICE_PREF_PARAM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "GTM_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_SERVICE"
        },
        "GTM_SERVICE_PARAMETER_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "info": "The type to which the service preference parameter belongs."
        }
      },
      "fk_tables": [
        "GTM_SERVICE_PREF_PARAM_D"
      ]
    }
  }
};
