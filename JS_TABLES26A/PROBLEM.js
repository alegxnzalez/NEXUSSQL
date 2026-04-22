// PROBLEM.js

window.PROBLEM = {
  "tables": {
    "PROBLEM": {
      "description": "This is a new table in ver 2.6. It is used to store the notification messages in the message center from GC3 when a event happens or a processing is done.",
      "columns": {
        "PROBLEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "PROBLEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID"
},
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GL_USER",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "PROBLEM_TITLE": {
          "type": "VARCHAR2(300)",
          "nullable": true
},
        "PROBLEM_BODY": {
          "type": "CLOB",
          "nullable": true
},
        "PROBLEM_DATE": {
          "type": "DATE",
          "nullable": false
},
        "PROBLEM_STATUS": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "PROBLEM_SEVERITY": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "PROBLEM_URL": {
          "type": "VARCHAR2(500)",
          "nullable": true
},
        "NOTIFY_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "NOTIFY_FUNCTION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the problem."
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the problem."
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the problem."
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the problem."
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON",
          "info": "Can store a user-defined icon that will appear within the user interface to help visually identify attributes of the problem."
},
        "I_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "PROBLEM_NOTE"
]
    }
  }
};