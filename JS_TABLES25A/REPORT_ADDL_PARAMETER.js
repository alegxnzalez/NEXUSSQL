// REPORT_ADDL_PARAMETER.js

window.REPORT_ADDL_PARAMETER = {
  "tables": {
    "REPORT_ADDL_PARAMETER": {
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
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT",
          "info": "Unique Report Id. "
        },
        "PARAM_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Name of the parameter. "
        },
        "PARAM_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Default value for this parameter. "
        },
        "OVERRIDE_PARAM_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Value which override default value. "
        },
        "SEQUENCE_NUMBER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Additional Parameter Sequence Number."
        }
      },
      "fk_tables": []
    }
  }
};
