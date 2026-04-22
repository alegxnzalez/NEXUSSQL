// AGENT_ACTION.js

window.AGENT_ACTION = {
  "tables": {
    "AGENT_ACTION": {
      "columns": {
        "AGENT_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "AGENT_ACTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "ACTION_TOPIC_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": false
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_ACTION"
},
        "IS_FOR_RELATED_OBJECTS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "HELP_DESCRIPTION": {
          "type": "CLOB",
          "nullable": true,
          "info": "Non-editable help for the action that is delivered as part of GC3."
},
        "COMPATIBLE_AGENT_EVENT_CLASS": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The event class with which the the action is compatible."
},
        "IS_PRE_PERSISTENCE_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether the action is compatible with pre-persistence lifetime events."
},
        "IS_POST_PERSISTENCE_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether the action is compatible with post-persistence lifetime  events."
},
        "IS_POST_REMOVAL_COMPATIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Indicates whether the action is compatible with post removal lifetime events."
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
        "IS_LONG_RUNNING_TASK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, this agent action is a long running task and should be monitored in the LONG_RUNNING_TASK table."
},
        "LRT_INTERRUPTABILITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "values": [
                    "NONE",
                    "INTERRUPTIBLE",
                    "RESUBMITTABLE"
          ],
          "info": "Interruptability support: NONE = task cannot be interrupted; INTERRUPTIBLE = task can be interrupted, likely ending in a failure state; RESUBMITTABLE: task can be resubmitted into it's origin queue for handling by another machine"
},
        "LRT_INTERRUPT_ON_SQL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "N",
                    "Y"
          ],
          "info": "If 'Y', a task interruption will force the next SQL statement to fail."
},
        "OPT_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OPT_FEATURE",
          "info": "Optional Feature associated with the agent action. If not null and the feature is disabled, agents running the action will log a warning to the log and skip it."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AGENT_ACTION_STATS",
        "AGENT_EVENTS_INVALID_ACTION",
        "FEATURE_AGENT_ACTION",
        "LONG_RUNNING_TASK"
]
    }
  }
};