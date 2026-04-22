// DIAG_PERFORMANCE_SCHEDULE.js

window.DIAG_PERFORMANCE_SCHEDULE = {
  "tables": {
    "DIAG_PERFORMANCE_SCHEDULE": {
      "columns": {
        "DIAG_PERFORMANCE_SCHEDULE_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Unique ID for the schedule request "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "General description prepended to collection files and e-mails "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Start time for performance collection "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "End time for performance collection "
        },
        "CAPTURE_FREQUENCY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Frequency of collection "
        },
        "CAPTURE_FREQUENCY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "CAPTURE_FREQUENCY_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "Contact to receive results when all collections are complete "
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COM_METHOD",
          "info": "Communication method to use for sending completed collections "
        },
        "CLIENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT",
          "info": "If sending by e-mail, contact information for replies. Also prepended to collection files. "
        },
        "STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
            "WAITING",
            "ASSIGNED",
            "RUNNING",
            "COMPLETED",
            "ABORTED",
            "PAUSED"
          ],
          "info": "State of collection "
        },
        "FILE_DIRECTORY": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Directory to hold collection files "
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
        "PROCESS_CONTROL_REQUEST_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Process Control record managing the planned/recurring diagnostic collection. "
        },
        "PERSIST_RESULT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, each performance collection is saved to the result table. "
        },
        "IS_XML": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the output is XML; otherwise, it is HTML."
        }
      },
      "fk_tables": [
        "DIAG_PERFORMANCE_RESULT",
        "DIAG_PERFORMANCE_SCHED_CAP"
      ]
    }
  }
};
