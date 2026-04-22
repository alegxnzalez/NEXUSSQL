// APP_ACTION.js

window.APP_ACTION = {
  "tables": {
    "APP_ACTION": {
      "columns": {
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "APP_ACTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "APP_ACTION_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "USER",
                    "PROCESS",
                    "AGENT"
          ]
},
        "ALLOW_SAVED_CONDITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_CONDITION"
},
        "ALLOW_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN"
},
        "ALLOW_CAUSE_MSG_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION"
},
        "ALLOW_SOLUTION_MSG_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "foreign_key": "TRANSLATION"
},
        "IS_POST_CHECK": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "IS_SUPPORT_POST": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "IS_OBJECT_LOCK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the business object is locked during the action call. The may lock multiple business object for UI/planning actions."
},
        "OBJECT_LOCK_TIMEOUT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Timeout for object lock, if IS_OBJECT_LOCK=Y"
},
        "OBJECT_LOCK_TIMEOUT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "OBJECT_LOCK_TIMEOUT_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "OBJECT_LOCK_POLLING": {
          "type": "NUMBER",
          "nullable": true,
          "info": "If not using JMS notification for cross-machine locks, the polling interval in msecs"
},
        "APPLICATION_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The name of Application.  E.g. Dock."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "The unique identifier of data query type."
},
        "IS_POWER_ACTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "An indicator whether this is a power action."
},
        "POWER_ACTION_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The name of power action."
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
        "ACTION",
        "AGENT_ACTION",
        "APP_ACTION_CHECK_ACCESS",
        "APP_ACTION_MORG_ACCESS",
        "APP_ACTION_REASON_ACCESS",
        "APP_ACTION_RESP_PARTY_P",
        "APP_POWER_ACTION_ACCESS",
        "AUDIT_TRAIL",
        "DOCUMENT_DEF",
        "REPORT",
        "TOPIC_ALIAS"
]
    }
  }
};