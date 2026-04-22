// LONG_RUNNING_TASK.js

window.LONG_RUNNING_TASK = {
  "tables": {
    "LONG_RUNNING_TASK": {
      "columns": {
        "TASK_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence number for the LRT "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the LRT was submitted. This may reflect the time it was placed in the workflow mediator or queues. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The time the LRT completed. "
        },
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "NOT STARTED",
            "MEDIATING",
            "QUEUED",
            "RUNNING",
            "INTERRUPTING",
            "INTERRUPTED",
            "RESUBMITTED",
            "ABORTED",
            "COMPLETED"
          ],
          "info": "State of the LRT: MEDIATING = in the workflow mediator, QUEUED = in an event queue, RUNNING = in an active process, COMPLETED = fully completed, RESUBMITTED = resubmitted to the Process Control or Data Queue table, INTERRUPTED = interrupted, ABORTED = stopped by a server shutdown. (Note that RUNNING LRTs are automatically changed to ABORTED LRTs on server startup.) "
        },
        "IS_RESUBMITTABLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "if Y, the LRT can be resubmitted to its original Process Control or Data Queue. (E.g. Bulk Plan before shipment modifications) "
        },
        "IS_INTERRUPTIBLE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "if Y, the LRT supports clean interruption (e.g. Bulkplan Termination) "
        },
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "APP_MACHINE",
          "info": "The application server running the LRT. "
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The log process ID of the LRT. This may not be unique across server runs, but corresponds to the Logging ID of the LRT during its runtime. "
        },
        "BUSINESS_PROCESS_PID": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Business process ID of the LRT. This links to the Open Processes diagnostics as long as the LRT is still running on the server. Note on startup, this process ID is cleared. It can be used as an indicator of current vs. historical tasks. "
        },
        "SUBMITTED_BY_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GL_USER",
          "info": "For User actions, the user that initiate the LRT. For Integrations, the user submitted on the transmission. For Process Control tasks and agent actions, the user associated with the workflow. "
        },
        "TASK_SOURCE": {
          "type": "VARCHAR2(80)",
          "nullable": true,
          "values": [
            "AGENT",
            "AGENT ACTION",
            "USER ACTION",
            "INTEGRATION",
            "INTEGRATION IN",
            "PROCESS CONTROL",
            "AD HOC"
          ],
          "info": "Type of LRT "
        },
        "ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTION",
          "info": "If TASK_SOURCE='ACTION', the name of the User Action corresponding to the LRT. "
        },
        "AGENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AGENT",
          "info": "If TASK_SOURCE='AGENT ACTION', the name of the Agent invoking the LRT. "
        },
        "AGENT_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AGENT_ACTION",
          "info": "If TASK_SOURCE='AGENT ACTION', the name of the Agent Action corresponding to the LRT "
        },
        "TOPIC_ALIAS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TOPIC_ALIAS",
          "info": "If TASK_SOURCE='PROCESS CONTROL', the name of the Process corresponding to the LRT. "
        },
        "I_TRANSMISSION_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If TASK_SOURCE='INTEGRATION', the transmission corresponding to the LRT. "
        },
        "PROCESS_CONTROL_HISTORY_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If TASK_SOURCE='PROCESS CONTROL', the unique Process Control History instance for this task request. "
        },
        "Q_INTEGRATION_IN_SEQ": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "If task came from Q_INTEGRATION_IN, a sequence for the queue record "
        },
        "TASK_DETAIL_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "If additional details are available for this task, a displayable name for the details (e.g. Bulk Plan Results). "
        },
        "TASK_DETAIL_URL": {
          "type": "VARCHAR2(2048)",
          "nullable": true,
          "info": "If additional details are available for this task, a URL to the additional details (e.g. the Bulk Plan Results screen). "
        },
        "TASK_DETAIL_PK": {
          "type": "VARCHAR2(1024)",
          "nullable": true,
          "info": "If additional details are available for this task, and table-driven, a string representation of the detail's primary key "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
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
        "ADHOC_DESCRIPTION": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Description of Ad-hoc Long Running Task (e.g. ADF operation)"
        }
      },
      "fk_tables": []
    }
  }
};
