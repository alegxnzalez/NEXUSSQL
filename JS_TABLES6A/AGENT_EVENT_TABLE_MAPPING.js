// AGENT_EVENT_TABLE_MAPPING.js

window.AGENT_EVENT_TABLE_MAPPING = {
  "tables": {
    "AGENT_EVENT_TABLE_MAPPING": {
      "columns": {
        "AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_EVENT"
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
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
        "BUSINESS_OBJECT_TYPE": {
          "type": "VARCHAR2(51)",
          "nullable": true
        },
        "EVENT_TRIGGER_TYPE": {
          "type": "VARCHAR2(51)",
          "nullable": true,
          "info": "To store the trigger type, the values will be one among CREATED, MODIFIED, REMOVED, MODIFY and CUSTOM."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "AGENT_EVENT_COLUMN_MAPPING"
      ]
    }
  }
};
