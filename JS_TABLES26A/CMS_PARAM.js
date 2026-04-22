// CMS_PARAM.js

window.CMS_PARAM = {
  "tables": {
    "CMS_PARAM": {
      "description": "Default parameter generators for documents sent to this CMS.",
      "columns": {
        "CONTENT_MANAGEMENT_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTENT_MANAGEMENT_SYSTEM",
          "info": "Content Management System ID"
},
        "PARAM_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "info": "Parameter name"
},
        "PARAM_VALUE_GEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CMS_PARAM_GENERATOR",
          "info": "Parameter value generator"
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