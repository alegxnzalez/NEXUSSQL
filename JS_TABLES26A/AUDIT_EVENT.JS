// AUDIT_EVENT.js

window.AUDIT_EVENT = {
  "tables": {
    "AUDIT_EVENT": {
      "description": "An auditable event.",
      "columns": {
        "AUDIT_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A unique ID for Audit Event."
},
        "AUDIT_EVENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "AUDIT_EVENT_TYPE",
          "info": "The audit event type."
},
        "TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "The time the audit event occurred."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "A key (from 1-4) based upon the insert_date which helps purge data periodically."
},
        "MODIFIED_OBJECT": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The object modified by the event. The type of object is implied by the audit_event_type_gid. It may be a record GID, a property, some other identifier or left null."
},
        "DML": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "I",
                    "U",
                    "D"
          ],
          "info": "Marks the event as Insert, Update or Delete."
},
        "PREVIOUS_VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The previous value of the modified object prior to the event."
},
        "NEW_VALUE": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The value of the modified object after the event."
},
        "REASON": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The reason for the event."
},
        "BY_SOURCE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "OPS",
                    "OTM"
          ],
          "info": "The source of the event. This can be OPS or OTM."
},
        "BY_GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The OTM User GID of the user initiating the event if the source is OTM."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROW_PROTECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "R"
          ]
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
        "IS_SECURE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the record cannot be reverted due to secure values."
}
      },
      "fk_tables": []
    }
  }
};