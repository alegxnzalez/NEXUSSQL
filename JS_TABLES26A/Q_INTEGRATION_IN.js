// Q_INTEGRATION_IN.js

window.Q_INTEGRATION_IN = {
  "tables": {
    "Q_INTEGRATION_IN": {
      "columns": {
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Queue sequence for the inbound integration."
},
        "Q_PREEMPTION_PRIORITY": {
          "type": "NUMBER(9)",
          "nullable": true,
          "info": "A sequence used for queue preemption."
},
        "Q_START": {
          "type": "DATE",
          "nullable": false,
          "info": "Time the event was last queued. If the event is scheduled, this will equal the scheduled time. If resubmitted, the resubmit time. Otherwise it matches the insert date."
},
        "Q_STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "QUEUED",
                    "ACTIVE",
                    "CANCELED",
                    "PROCESSED",
                    "FAILED"
          ],
          "info": "Queue state of the event (QUEUED, ACTIVE, CANCELED, PROCESSED, FAILED)"
},
        "Q_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Time the event spent in queue"
},
        "Q_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the q_time."
},
        "Q_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Database base value for the q_time."
},
        "Q_PROCESS_START": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the event was last dequeued and passed to the executor for processing."
},
        "Q_PROCESS_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Time the event took to execute."
},
        "Q_PROCESS_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the q_process_time."
},
        "Q_PROCESS_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Database base value for the q_process_time."
},
        "Q_LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true,
          "info": "ID linking the event execution to the system logs."
},
        "Q_PROCESS_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "The application machine that polled and executed the event"
},
        "Q_APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER",
          "info": "The application server that polled and executed the event"
},
        "Q_RELATED_QUEUE_SEQ": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "Sequence of the parent queue event that populated this event."
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "Index for date-based partitioning."
},
        "I_TRANSMISSION_NO": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Specifies the transmission number for the event."
},
        "TOPIC_DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "A short description of the topic, displayed on the inbound integration events finder."
},
        "TOPIC_CLASS_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Workflow topic class of the event."
},
        "TOPIC_PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Workflow parameters for the event."
},
        "Q_RELATED_QUEUE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Queue table name of parent event"
},
        "Q_QUEUE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Queue name used to enqueue this record"
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
          "info": "If Y, this transmission is a long running task and should be monitored in the LONG_RUNNING_TASK table."
}
      },
      "fk_tables": []
    }
  }
};