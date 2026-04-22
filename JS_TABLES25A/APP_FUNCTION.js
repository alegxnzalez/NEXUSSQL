// APP_FUNCTION.js

window.APP_FUNCTION = {
  "tables": {
    "APP_FUNCTION": {
      "columns": {
        "APP_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "APP_FUNCTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LITE_SCA_SUPPORT": {
          "type": "CLOB",
          "nullable": true,
          "info": "XML Clob holding detailed information on SCA support for this function. Conforms to OTMScaSupport.xsd schema. "
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
        },
        "IS_FOR_PROCESS_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If 'Y', the application function maps to a Process Control topic and can be used for Cluster assignments."
        }
      },
      "fk_tables": [
        "PLANNING_TASK"
      ]
    }
  }
};
