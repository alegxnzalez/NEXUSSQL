// AGENT_EVENT_COLUMN_MAPPING.js

window.AGENT_EVENT_COLUMN_MAPPING = {
  "tables": {
    "AGENT_EVENT_COLUMN_MAPPING": {
      "columns": {
        "AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_EVENT_TABLE_MAPPING"
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "AGENT_EVENT_TABLE_MAPPING"
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(250)",
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
