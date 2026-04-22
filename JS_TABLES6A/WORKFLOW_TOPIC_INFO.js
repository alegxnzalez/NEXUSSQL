// WORKFLOW_TOPIC_INFO.js

window.WORKFLOW_TOPIC_INFO = {
  "tables": {
    "WORKFLOW_TOPIC_INFO": {
      "columns": {
        "TOPIC_INFO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TOPIC_INFO_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "CONTEXT": {
          "type": "VARCHAR2(255)",
          "nullable": true
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "WORKFLOW_ACTION_INFO",
        "WORKFLOW_INFO",
        "WORKFLOW_TOPIC_PARAM",
        "WORKFLOW_TRIGGER_INFO"
      ]
    }
  }
};
