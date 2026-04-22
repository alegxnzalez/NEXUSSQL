// MONITOR_PROFILE_DELETED.js

window.MONITOR_PROFILE_DELETED = {
  "tables": {
    "MONITOR_PROFILE_DELETED": {
      "columns": {
        "MONITOR_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE"
        },
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LAST_EVENT_OCCUR_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "LAST_EVENT_RECEIVED_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "MONITOR_PROFILE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The template from which this monitor profile was created."
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
      "fk_tables": []
    }
  }
};
