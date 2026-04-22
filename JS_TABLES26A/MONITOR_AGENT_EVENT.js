// MONITOR_AGENT_EVENT.js

window.MONITOR_AGENT_EVENT = {
  "tables": {
    "MONITOR_AGENT_EVENT": {
      "description": "The MONITOR_AGENT_EVENT is a link for each agent to the list of events which were of interest to the agent and evaluated its saves queries to true.",
      "columns": {
        "MONITOR_AGENT_EVENT_SEQNO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The primary key for uniqueness."
},
        "MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MONITOR_AGENT",
          "info": "A foreign key reference to the Monitor_Agent to which the event was of interest and evaluated its saved queries to true."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The foreign key reference into the ie_shipment_status table for events which are xml based."
},
        "AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The foreign key reference into the agent_event_group table."
},
        "EVENT_OCCUR_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date and time the event occurred."
},
        "EVENT_RECEIVED_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The date and time the event was received."
},
        "AGENT_ACTION_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "AGENT_ACTION_STATUS_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "MONITOR_PROFILE_EXCEPTION_DESC": {
          "type": "VARCHAR2(150)",
          "nullable": true
},
        "MONITORED_OBJECT": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "EXCEPTION_MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The milestone that got an error because of the profiling exception milestone."
},
        "TRIG_EXPT_MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The milestone which caused the profiling exception determined by the exception milestone"
},
        "EXCEPTION_AGENT_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This is the GID of the exception event that was detected. (e.g. MONITORED SHIPMENT - MISSING This is the GID of the exception event that was detected. (e.g. MONITORED SHIPMENT - MISSING SEQUENCE MILESTONE)"
},
        "IS_CURRENT_EXCEPTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates that the agent event in case of an exception event is currently valid. This value is reset to 'N' every time an agent that produced the exception event is profiled. If the exception still persists another event record is inserted with a value of 'Y'."
},
        "PREDECESSOR_MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GID of the predecessor milestone used to determine this exception."
},
        "SUCCESSOR_MONITOR_AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GID of the successor milestone used to determine this exception."
},
        "STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE",
          "info": "Status code for this event"
},
        "REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE",
          "info": "Reason code for this event"
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