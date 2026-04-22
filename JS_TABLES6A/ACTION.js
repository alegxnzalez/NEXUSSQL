// ACTION.js

window.ACTION = {
  "tables": {
    "ACTION": {
      "columns": {
        "ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ACTION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LABEL_KEY": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "DISPLAY_IGNORE_CRITERIA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If 'Y', UI will display \"Ignore Criteria\" screen. "
        },
        "ACTION_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTION_DEF"
        },
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_ACTION"
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
        "MANAGER_LAYOUT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MANAGER_LAYOUT"
        },
        "IS_LONG_RUNNING_TASK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, this action is a long running task and should be monitored in the LONG_RUNNING_TASK table. "
        },
        "LRT_INTERRUPTABILITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "values": [
            "NONE",
            "INTERRUPTIBLE",
            "RESUBMITTABLE"
          ],
          "info": "Interruptability support: NONE = task cannot be interrupted; INTERRUPTIBLE = task can be interrupted, likely ending in a failure state; RESUBMITTABLE: task can be resubmitted into it's origin queue for handling by another machine "
        },
        "LRT_INTERRUPT_ON_SQL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "N",
            "Y"
          ],
          "info": "If 'Y', a task interruption will force the next SQL statement to fail. "
        },
        "LRT_OBJECT_COUNT_THRESHOLD": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The action is only tracked as a Long Running Task if IS_LONG_RUNNING_TASK='Y' and the # of objects passed to the UI action exceeds this threshold. "
        },
        "OPT_FEATURE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OPT_FEATURE",
          "info": "Optional Feature associated with the action. If not null and the feature is disabled, users trying to run the action will receive a warning the feature is disabled."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "ACTION_ARG",
        "ACTION_DRAG",
        "LONG_RUNNING_TASK",
        "MANUAL_AGENT_TRIGGER"
      ]
    }
  }
};
