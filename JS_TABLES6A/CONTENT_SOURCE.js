// CONTENT_SOURCE.js

window.CONTENT_SOURCE = {
  "tables": {
    "CONTENT_SOURCE": {
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
        "CONTENT_SOURCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "CONTENT_SOURCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "JAVA_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "JAVA_PLUGIN",
          "info": "Java implementation of interface to external system. Implements MessageSourceInterface. "
        },
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "Contains user and connectivity details for use by plugin to retrieve messages "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COM_METHOD",
          "info": "Communication method to use for transport"
        },
        "ACK_EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM"
        },
        "ACK_OPTION": {
          "type": "VARCHAR2(15)",
          "nullable": false,
          "values": [
            "NONE",
            "MESSAGE",
            "MESSAGE GROUP"
          ]
        }
      },
      "fk_tables": [
        "CONTENT_SOURCE_SUBSCRIPTION"
      ]
    }
  }
};
