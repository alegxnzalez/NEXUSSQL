// VISIBILITY_EVENT.js

window.VISIBILITY_EVENT = {
  "tables": {
    "VISIBILITY_EVENT": {
      "description": "The data queue for shipment events",
      "columns": {
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Queue sequence for the shipment event. Sequence name is VISIBILITY_EVENT_SEQUENCE."
},
        "VISIBILITY_SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "Q_PREEMPTION_PRIORITY": {
          "type": "NUMBER(9)",
          "nullable": true,
          "info": "A negative sequence used for queue preemption"
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
          "nullable": true
},
        "Q_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_PROCESS_START": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the event was last dequeued and passed to the executor for processing"
},
        "Q_PROCESS_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Time the shipment event took to execute"
},
        "Q_PROCESS_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "Q_PROCESS_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true,
          "info": "ID linking the shipment event execution to the system logs"
},
        "Q_PROCESS_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "The application machine that polled and executed the shipment event"
},
        "Q_RELATED_QUEUE_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Sequence of the parent queue event that populated this event"
},
        "Q_APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER"
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "Index for date-based partitioning"
},
        "VISIBILITY_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "VISIBILITY_EVENT_TYPE",
          "info": "Event type ID"
},
        "EVENT_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Event date"
},
        "AVAILABLE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Available date"
},
        "SEND_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Send date"
},
        "EVENT_REMARK": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Remark for the event"
},
        "EVENT_REASON": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Event reason"
},
        "PIECES": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of package items"
},
        "EVENT_LOCATION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "location generates the event"
},
        "ORIG_LOCATION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Original Location for the shipment"
},
        "DEST_LOCATION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Destination location for the shipment"
},
        "EVENT_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "Q_RELATED_QUEUE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "VISIBILITY_PIECE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "EVENT_DATE_OFFSET": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Represents the UTC offset for the EVENT_DATE column"
},
        "EVENT_FACILITY": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Facility where the event occured"
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