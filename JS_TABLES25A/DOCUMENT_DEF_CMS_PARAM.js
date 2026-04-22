// DOCUMENT_DEF_CMS_PARAM.js

window.DOCUMENT_DEF_CMS_PARAM = {
  "tables": {
    "DOCUMENT_DEF_CMS_PARAM": {
      "columns": {
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Document definition ID "
        },
        "PARAM_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name "
        },
        "PARAM_VALUE_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "Parameter value generator "
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
        "IS_MODIFIABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y, if the parameter can be regenerated after document creation"
        }
      },
      "fk_tables": []
    }
  }
};
