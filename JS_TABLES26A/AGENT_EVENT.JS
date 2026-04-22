// AGENT_EVENT.js

window.AGENT_EVENT = {
  "tables": {
    "AGENT_EVENT": {
      "columns": {
        "AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "AGENT_EVENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "AGENT_EVENT_PARENT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AGENT_EVENT"
},
        "EVENT_TOPIC_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false
},
        "IS_CUSTOM": {
          "type": "CHAR(1)",
          "nullable": false
},
        "IS_LIFETIME_MOD": {
          "type": "CHAR(1)",
          "nullable": false
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
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Column to store the description about agent events"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AGENT_EVENT",
        "AGENT_EVENTS_INVALID_ACTION",
        "AGENT_EVENT_DETAILS",
        "AGENT_EVENT_TABLE_MAPPING",
        "AUTO_ASSIGN_RULE_EVENT"
]
    }
  }
};