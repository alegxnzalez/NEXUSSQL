// TOPIC_ALIAS.js

window.TOPIC_ALIAS = {
  "tables": {
    "TOPIC_ALIAS": {
      "columns": {
        "TOPIC_ALIAS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TOPIC_ALIAS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "TOPIC_CLASS_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": false
        },
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_ACTION"
        },
        "IS_FOR_PROCESS_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the topic alias is available for use as a process control request. "
        },
        "PROCESS_CONTROL_MENU": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Specifies the hierarchy for the process control menu. "
        },
        "IS_PROCESS_SYNC": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies whether the process is executed or published.  Topics which take more than 30 seconds or so should be published to avoid browser timeout.  Others should be executed to allow for immediate error reporting. "
        },
        "PROCESS_CONTROL_HELP": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Specifies the online help file for the process topic. "
        },
        "IS_FOR_BATCH_PROCESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the topic alias is available for use in batch "
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
          "info": "If Y, this topic is a long running task and should be monitored in the LONG_RUNNING_TASK table. "
        },
        "LRT_INTERRUPTABILITY": {
          "type": "VARCHAR2(40)",
          "nullable": false,
          "values": [
            "NONE",
            "INTERRUPTIBLE",
            "RESUBMITTABLE"
          ],
          "info": "Interruptability support: NONE = task cannot be interrupted; INTERRUPTIBLE = task can be interrupted, likely ending in a failure state; RESUBMITTABLE: task can be resubmitted into it's origin queue for handling by another machine "
        },
        "LRT_SCA_REQUIREMENTS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "NONE",
            "THREAD",
            "MEDIATOR"
          ],
          "info": "For long running tasks, determines if the task should be pulled out of the PROCESS_CONTROL_REQUEST table only when resources are available to process it. NONE=task is pulled regardless of resources; THREAD=task is pulled only if an event thread in the queue is available; MEDIATOR=task is pulled only if an event thread is available and the task will not be blocked by the mediator. "
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        },
        "DEFAULT_LOG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOG_PROFILE",
          "info": "Default log profile when per-process action logging is enabled."
        }
      },
      "fk_tables": [
        "BATCH_PROCESS_D",
        "LOGFILE_ACTION",
        "LONG_RUNNING_TASK",
        "PROCESS_CONTROL_REQUEST"
      ]
    }
  }
};
