// GTM_CONTENT_SOURCE_CONFIG.js

window.GTM_CONTENT_SOURCE_CONFIG = {
  "tables": {
    "GTM_CONTENT_SOURCE_CONFIG": {
      "columns": {
        "GTM_CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTENT_SOURCE",
          "info": "Specifies the unique identifier for the GTM Content Source. "
        },
        "SOURCE_CONFIG_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "Specifies the Id given for the source configuration. "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COM_METHOD",
          "info": "Specifies the unique identifier for a communication method. "
        },
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "Specifies the unique identifier for an external system. "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the source configuration is active."
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
        }
      },
      "fk_tables": [
        "GTM_CONTENT_SOURCE_EXT_SYS"
      ]
    }
  }
};
