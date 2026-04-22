// AUDIT_TRAIL.js

window.AUDIT_TRAIL = {
  "tables": {
    "AUDIT_TRAIL": {
      "description": "Table used to store Audit data",
      "columns": {
        "AUDIT_TRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier of Audit_Trail table."
},
        "AUDIT_TRAIL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "DB Sequence."
},
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "Workflow Notify Subject.  E.g. ORDER - CREATED"
},
        "NOTIFY_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_FUNCTION",
          "info": "Workflow Notify Function. E.g. ORDER_EVENT.Object GID for which the lifetime event was generated"
},
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "User who made change to the data.  Do not make GL_USER_GID a Fk.  We need to keep the record in the audit table when the user is no longer a valid glog user"
},
        "AUDIT_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Local server time when the audit is recorded"
},
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_ACTION"
},
        "APP_ACTION_PARAMETERS": {
          "type": "VARCHAR2(500)",
          "nullable": true
},
        "BS_QUICK_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_QUICK_CODE"
},
        "BS_RESPONSIBLE_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_RESPONSIBLE_PARTY"
},
        "BS_STATUS_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_GROUP"
},
        "BS_STATUS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_STATUS_CODE"
},
        "BS_REASON_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_GROUP"
},
        "BS_REASON_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BS_REASON_CODE"
},
        "BS_REASON_COMMENT": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "TRANSACTIONAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSACTIONAL_EVENT"
},
        "AUDIT_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUDIT_OBJECT_TYPE"
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "REASON_REQUIRED_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "PROMPT",
                    "PARTY",
                    "STATUS",
                    "REASON"
          ]
},
        "REASON_SOURCE": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "MARKED_FOR_PURGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "A boolean field.  When it is set to 'Y', this row and its child data will be purged."
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
      "fk_tables": [
        "AUDIT_DATA_INFO",
        "GTM_AUDIT_TRAIL"
]
    }
  }
};