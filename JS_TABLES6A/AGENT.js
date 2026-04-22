// AGENT.js

window.AGENT = {
  "tables": {
    "AGENT": {
      "columns": {
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "AGENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "REENTRANCY_LEVEL": {
          "type": "NUMBER(2)",
          "nullable": true
        },
        "IS_ACTIVE": {
          "type": "CHAR(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether agent is active or not. "
        },
        "RUN_AS_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "USER ROLE",
            "OBJECT"
          ]
        },
        "RUN_AS_USER_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "USER_ROLE"
        },
        "RUN_AS_OBJECT_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY"
        },
        "THRESHOLD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "THRESHOLD",
          "info": "A threshold defined at agent level.  If the data changes of the lifetime events the agent listens to passed threshold tolerance, the agent will be triggered. "
        },
        "IS_ON_SINGLE_THREAD": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_OBJECT_LOCK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the business object is locked until the agent completes "
        },
        "OBJECT_LOCK_TIMEOUT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Object lock timeout, if IS_OBJECT_LOCK=Y "
        },
        "OBJECT_LOCK_TIMEOUT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "OBJECT_LOCK_TIMEOUT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OBJECT_LOCK_POLLING": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If not using JMS notification for cross-machine locks, the polling interval in msecs "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
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
        "IS_LONG_RUNNING_TASK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, this agent is a long running task and should be monitored in the LONG_RUNNING_TASK table. "
        },
        "LOG_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "NONE",
            "AGENT",
            "ACTIONS"
          ],
          "info": "Level to collect agent logging information in the database. If AGENT, AGENT_LOG records are added to track agent activity. If ACTIONS, both AGENT_LOG and AGENT_ACTION_LOG records are added. Note that this value always overrides the default property-driven behavior. The default is used only if the field is left NULL. "
        },
        "STATS_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "NONE",
            "AGENT",
            "ACTIONS"
          ],
          "info": "Level to collect agent statistics in the database. If AGENT, AGENT_STATS records are updated to track agent activity. If ACTIONS, both AGENT_STATS and AGENT_ACTION_STATS records are modified. Note that this value always overrides the default property-driven behavior. The default is used only if the field is left NULL."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "AGENT_ACTION_DETAILS",
        "AGENT_CHANGE_LOG",
        "AGENT_EVENT_DETAILS",
        "AGENT_STATS",
        "LONG_RUNNING_TASK",
        "MANUAL_AGENT_TRIGGER",
        "MONITOR_AGENT"
      ]
    }
  }
};
