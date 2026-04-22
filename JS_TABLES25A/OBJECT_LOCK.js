// OBJECT_LOCK.js

window.OBJECT_LOCK = {
  "tables": {
    "OBJECT_LOCK": {
      "columns": {
        "LOCK_TYPE": {
          "type": "VARCHAR2(300)",
          "nullable": false,
          "key_value": true,
          "info": "Type of lock. May be a DATA_QUERY_TYPE or some other coordination type. "
        },
        "OBJECT_ID": {
          "type": "VARCHAR2(300)",
          "nullable": false,
          "key_value": true,
          "info": "Lock ID. May be a business object GID or some other coordination key. "
        },
        "OWNER_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "Machine currently owning the lock "
        },
        "OWNED_SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time the lock was grabbed "
        },
        "ACTIVITY": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Activity currently using the lock "
        },
        "LOG_PROCESS_ID": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A link to the System log entries for the lock owner"
        },
        "OWNER_SEQUENCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
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
