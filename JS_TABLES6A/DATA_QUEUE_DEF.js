// DATA_QUEUE_DEF.js

window.DATA_QUEUE_DEF = {
  "tables": {
    "DATA_QUEUE_DEF": {
      "columns": {
        "DATA_QUEUE_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global ID for the data queue definition "
        },
        "DATA_QUEUE_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Data queue definition ID "
        },
        "DATA_QUEUE_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUEUE_TABLE",
          "info": "Data table GID "
        },
        "DATA_QUEUE_POLLER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUEUE_POLLER",
          "info": "Data queue poller GID "
        },
        "DATA_QUEUE_EXECUTOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUEUE_EXECUTOR",
          "info": "Data queue executor GID "
        },
        "THREAD_COUNT": {
          "type": "NUMBER(3)",
          "nullable": false,
          "info": "Number of threads to allocate to pollers "
        },
        "BATCH_SIZE": {
          "type": "NUMBER(5)",
          "nullable": true,
          "info": "Number of events to retrieve in a polling batch. If null, all events are retrieved. "
        },
        "POLLING_FREQUENCY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Duration between queue polls "
        },
        "POLLING_FREQUENCY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "POLLING_FREQUENCY_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FINDER_SET",
          "info": "Finder set for Event Queue viewer "
        },
        "IS_ACTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If N, the queue is inactive and ignored by GC3 "
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
        "LRT_RELATED_EVENT_QUEUE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "info": "Event queue associated with the data queue. This allows the server to check event queue resources when pulling of records from the queue table. "
        },
        "LRT_SCA_REQUIREMENTS": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
            "NONE",
            "THREAD",
            "MEDIATOR"
          ],
          "info": "For long running tasks, determines if the task should be pulled out of the data queue only when resources are available to process it. NONE=task is pulled regardless of resources; THREAD=task is pulled only if an event thread in the queue is available; MEDIATOR=task is pulled only if an event thread is available and the task will not be blocked by the mediator.  Note this column is only used when LRT_RELATED_EVENT_QUEUE is not null."
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "APP_SERVER_DATA_QUEUE_DEF",
        "DATA_Q_DEF_RELATED_Q_DEF"
      ]
    }
  }
};
